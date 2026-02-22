#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const BASE_URL = "https://www.payvapayment.com";

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    outDir: "reports/integrations",
    email: "",
    name: "Codex Test",
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    const next = args[i + 1];

    if (arg === "--out-dir" && next) {
      options.outDir = next;
      i += 1;
    } else if (arg === "--email" && next) {
      options.email = next;
      i += 1;
    } else if (arg === "--name" && next) {
      options.name = next;
      i += 1;
    }
  }

  return options;
}

function result(name, status, details) {
  return { name, status, details };
}

async function checkTrackingScripts() {
  const response = await fetch(BASE_URL, {
    headers: { "user-agent": "payva-integration-check/1.0" },
  });
  const html = await response.text();

  const hasGtag = html.includes("googletagmanager.com/gtag/js");
  const hasGtm = html.includes("googletagmanager.com/gtm.js");

  return result(
    "Tracking scripts (GA4/GTM)",
    hasGtag && hasGtm ? "pass" : "warn",
    hasGtag && hasGtm
      ? "GA4 and GTM script tags are present in production HTML."
      : "Missing GA4 and/or GTM script tags in production HTML.",
  );
}

async function checkWaitlistValidation() {
  const response = await fetch(`${BASE_URL}/api/waitlist`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "Validation Test" }),
  });

  const payload = await response.json().catch(() => ({}));
  const ok = response.status === 400 && payload.error === "Email is required";

  return result(
    "Waitlist API validation",
    ok ? "pass" : "warn",
    ok
      ? "Validation check passed (missing email -> 400)."
      : `Unexpected validation response: status=${response.status}.`,
  );
}

async function checkWaitlistSubmit(options) {
  if (!options.email) {
    return result(
      "Waitlist end-to-end submit",
      "skip",
      "Skipped: provide --email to run real Google Sheets + email flow.",
    );
  }

  const response = await fetch(`${BASE_URL}/api/waitlist`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: options.name, email: options.email }),
  });

  const payload = await response.json().catch(() => ({}));
  const ok = response.ok && payload.success === true;

  return result(
    "Waitlist end-to-end submit",
    ok ? "pass" : "fail",
    ok
      ? `Submission succeeded for ${options.email}.`
      : `Submission failed: status=${response.status} body=${JSON.stringify(payload)}`,
  );
}

async function checkExchangeRateProvider() {
  const response = await fetch("https://api.exchangerate-api.com/v4/latest/NGN");
  const payload = await response.json().catch(() => ({}));
  const ok = response.ok && payload && typeof payload.rates === "object";

  return result(
    "Exchange rate provider",
    ok ? "pass" : "warn",
    ok
      ? "Exchange-rate API responded with rates payload."
      : `Exchange-rate API failed: status=${response.status}`,
  );
}

async function checkGeoProvider() {
  const response = await fetch("https://ipapi.co/json/");
  const payload = await response.json().catch(() => ({}));
  const ok = response.ok && typeof payload.country_code === "string";

  return result(
    "Geo provider (ipapi)",
    ok ? "pass" : "warn",
    ok
      ? "ipapi responded with country_code data."
      : `ipapi failed: status=${response.status}`,
  );
}

async function checkSocialLinks() {
  const links = [
    "https://www.facebook.com/Payvaofficial?ref=1",
    "https://www.instagram.com/payvapayment/",
    "https://x.com/Payvapayment",
    "https://www.linkedin.com/company/payvapayment",
  ];

  const statuses = [];

  for (const url of links) {
    try {
      const response = await fetch(url, {
        method: "HEAD",
        redirect: "manual",
      });
      statuses.push(`${url} -> ${response.status}`);
    } catch {
      statuses.push(`${url} -> error`);
    }
  }

  const hasFailure = statuses.some((line) => line.endsWith("error"));

  return result(
    "Social profile endpoints",
    hasFailure ? "warn" : "pass",
    statuses.join("; "),
  );
}

function toMarkdown(rows, generatedAt) {
  const lines = [];
  lines.push("# Third-Party Integration Check");
  lines.push("");
  lines.push(`Generated: ${generatedAt}`);
  lines.push("");

  for (const row of rows) {
    lines.push(`- [${row.status.toUpperCase()}] ${row.name}: ${row.details}`);
  }

  return `${lines.join("\n")}\n`;
}

async function main() {
  const options = parseArgs();
  const generatedAt = new Date().toISOString();

  const rows = [];
  rows.push(await checkTrackingScripts());
  rows.push(await checkWaitlistValidation());
  rows.push(await checkWaitlistSubmit(options));
  rows.push(await checkExchangeRateProvider());
  rows.push(await checkGeoProvider());
  rows.push(await checkSocialLinks());

  const outDir = path.resolve(options.outDir);
  await fs.mkdir(outDir, { recursive: true });

  const safeTimestamp = generatedAt.replace(/[:.]/g, "-");
  const jsonPath = path.join(outDir, `integrations-${safeTimestamp}.json`);
  const mdPath = path.join(outDir, `integrations-summary-${safeTimestamp}.md`);

  await fs.writeFile(jsonPath, `${JSON.stringify(rows, null, 2)}\n`, "utf8");
  await fs.writeFile(mdPath, toMarkdown(rows, generatedAt), "utf8");

  console.log(`Integration JSON: ${jsonPath}`);
  console.log(`Integration summary: ${mdPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
