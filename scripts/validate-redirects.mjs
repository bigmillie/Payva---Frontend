#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_BASE_URL = "https://www.payvapayment.com";
const DEFAULT_MAP_PATH = "config/redirect-map.csv";

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    baseUrl: DEFAULT_BASE_URL,
    mapPath: DEFAULT_MAP_PATH,
    outDir: "reports/crawl",
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    const next = args[i + 1];

    if (arg === "--base-url" && next) {
      options.baseUrl = next;
      i += 1;
    } else if (arg === "--map" && next) {
      options.mapPath = next;
      i += 1;
    } else if (arg === "--out-dir" && next) {
      options.outDir = next;
      i += 1;
    }
  }

  return options;
}

async function parseRedirectMap(filePath) {
  const absolutePath = path.resolve(filePath);
  const exists = await fs
    .access(absolutePath)
    .then(() => true)
    .catch(() => false);

  if (!exists) return [];

  const raw = await fs.readFile(absolutePath, "utf8");
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

  if (lines.length <= 1) return [];

  return lines.slice(1).map((line) => {
    const [source, destination, statusCodeRaw] = line
      .split(",")
      .map((item) => item.trim());

    return {
      source,
      destination,
      statusCode: Number(statusCodeRaw || "301"),
    };
  });
}

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const text = String(value);
  if (!/[",\n]/.test(text)) return text;
  return `"${text.replace(/"/g, '""')}"`;
}

async function writeCsv(filePath, rows) {
  if (rows.length === 0) {
    await fs.writeFile(filePath, "source,destination,expectedStatus,actualStatus,location,pass\n", "utf8");
    return;
  }

  const headers = Object.keys(rows[0]);
  const lines = [headers.join(",")];

  for (const row of rows) {
    lines.push(headers.map((header) => csvEscape(row[header])).join(","));
  }

  await fs.writeFile(filePath, `${lines.join("\n")}\n`, "utf8");
}

async function main() {
  const options = parseArgs();
  const redirects = await parseRedirectMap(options.mapPath);

  const results = [];

  for (const redirect of redirects) {
    if (!redirect.source || !redirect.destination) continue;

    const sourceUrl = new URL(redirect.source, options.baseUrl).toString();
    const expectedLocation = new URL(redirect.destination, options.baseUrl).toString();

    let actualStatus = 0;
    let location = "";

    try {
      const response = await fetch(sourceUrl, {
        method: "GET",
        redirect: "manual",
      });
      actualStatus = response.status;
      location = response.headers.get("location") || "";
    } catch {
      actualStatus = 0;
    }

    const normalizedLocation = location
      ? new URL(location, options.baseUrl).toString()
      : "";
    const passed =
      actualStatus === redirect.statusCode &&
      normalizedLocation === expectedLocation;

    results.push({
      source: redirect.source,
      destination: redirect.destination,
      expectedStatus: redirect.statusCode,
      actualStatus,
      location: normalizedLocation,
      pass: passed ? "yes" : "no",
    });
  }

  const generatedAt = new Date().toISOString().replace(/[:.]/g, "-");
  const outDir = path.resolve(options.outDir);
  await fs.mkdir(outDir, { recursive: true });

  const reportPath = path.join(outDir, `redirect-validation-${generatedAt}.csv`);
  await writeCsv(reportPath, results);

  console.log(`Redirect entries checked: ${results.length}`);
  console.log(`Redirect validation report: ${reportPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
