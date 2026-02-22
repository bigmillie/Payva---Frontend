#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const DEFAULT_URLS = [
  "https://www.payvapayment.com/",
  "https://www.payvapayment.com/features",
  "https://www.payvapayment.com/company",
  "https://www.payvapayment.com/contact",
  "https://www.payvapayment.com/privacy-policy",
  "https://www.payvapayment.com/terms",
];
const execFileAsync = promisify(execFile);

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    urls: DEFAULT_URLS,
    outDir: "reports/accessibility",
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    const next = args[i + 1];

    if (arg === "--url" && next) {
      options.urls = [...options.urls, next];
      i += 1;
    } else if (arg === "--out-dir" && next) {
      options.outDir = next;
      i += 1;
    }
  }

  return options;
}

async function runAudit(url, tempDir) {
  const safeUrl = url.replace(/[^a-z0-9]/gi, "-").toLowerCase();
  const outputPath = path.join(tempDir, `${safeUrl}-a11y.json`);
  const args = [
    "--yes",
    "lighthouse",
    url,
    "--quiet",
    "--chrome-flags=--headless=new --no-sandbox",
    "--only-categories=accessibility",
    "--output=json",
    `--output-path=${outputPath}`,
  ];

  await execFileAsync("npx", args, { maxBuffer: 10 * 1024 * 1024 });
  const report = await fs.readFile(outputPath, "utf8");
  return JSON.parse(report);
}

function collectFindings(audits) {
  if (!audits) return [];

  return Object.entries(audits)
    .filter(([, audit]) => {
      if (audit.scoreDisplayMode === "notApplicable") return false;
      return typeof audit.score === "number" && audit.score < 1;
    })
    .map(([id, audit]) => ({
      id,
      title: audit.title,
      description: audit.description || "",
      score: Math.round((audit.score || 0) * 100),
    }))
    .sort((a, b) => a.score - b.score);
}

function toMarkdown(rows, generatedAt) {
  const lines = [];
  lines.push("# Accessibility Check");
  lines.push("");
  lines.push(`Generated: ${generatedAt}`);
  lines.push("");

  for (const row of rows) {
    lines.push(`## ${row.url}`);
    lines.push("");
    lines.push(`- Accessibility score: ${row.score}`);
    if (row.findings.length === 0) {
      lines.push("- Findings: none from Lighthouse mobile accessibility run.");
    } else {
      lines.push("- Findings:");
      for (const finding of row.findings) {
        lines.push(
          `  - [${finding.score}] ${finding.title} (${finding.id})`,
        );
      }
    }
    lines.push("");
  }

  lines.push("## Manual Validation Checklist");
  lines.push("");
  lines.push("- Keyboard-only navigation across header/menu/modal/form flows");
  lines.push("- Visible focus states on all interactive elements");
  lines.push("- Form labels and error messaging announced correctly by screen readers");
  lines.push("- Color contrast checks for text and controls");
  lines.push("- Heading order and landmark structure consistency");

  return `${lines.join("\n")}\n`;
}

async function main() {
  const options = parseArgs();
  const generatedAt = new Date().toISOString();
  const tempDir = path.resolve("/tmp/payva-artifacts");
  await fs.mkdir(tempDir, { recursive: true });
  const rows = [];

  for (const url of options.urls) {
    const lighthouse = await runAudit(url, tempDir);

    rows.push({
      url,
      score: Math.round((lighthouse?.categories?.accessibility?.score || 0) * 100),
      findings: collectFindings(lighthouse?.audits),
    });
  }

  const outDir = path.resolve(options.outDir);
  await fs.mkdir(outDir, { recursive: true });

  const safeTimestamp = generatedAt.replace(/[:.]/g, "-");
  const jsonPath = path.join(outDir, `accessibility-${safeTimestamp}.json`);
  const mdPath = path.join(outDir, `accessibility-summary-${safeTimestamp}.md`);

  await fs.writeFile(jsonPath, `${JSON.stringify(rows, null, 2)}\n`, "utf8");
  await fs.writeFile(mdPath, toMarkdown(rows, generatedAt), "utf8");

  console.log(`Accessibility JSON: ${jsonPath}`);
  console.log(`Accessibility summary: ${mdPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
