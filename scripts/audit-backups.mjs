#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const generatedAt = new Date().toISOString();
  const outDir = path.resolve("reports/ops");
  await fs.mkdir(outDir, { recursive: true });

  const checks = [];

  const githubWorkflows = await fileExists(path.resolve(".github/workflows"));
  checks.push({
    item: "Repository-level backup workflow in codebase",
    status: githubWorkflows ? "found" : "not_found",
    evidence: githubWorkflows
      ? "Found .github/workflows directory."
      : "No .github/workflows directory in this repository.",
  });

  const vercelConfig = await fileExists(path.resolve("vercel.json"));
  checks.push({
    item: "Vercel backup configuration in repository",
    status: vercelConfig ? "found" : "not_found",
    evidence: vercelConfig
      ? "Found vercel.json file."
      : "No vercel.json found; backup schedule likely configured in platform UI.",
  });

  checks.push({
    item: "Google Sheets waitlist backup schedule",
    status: "manual_required",
    evidence:
      "Cannot verify schedule from code alone. Confirm Google Workspace/AppScript or external job scheduler and last run timestamp.",
  });

  checks.push({
    item: "Restore drill verification",
    status: "manual_required",
    evidence:
      "Run one restore test (code, env vars, and waitlist data) and record recovery time.",
  });

  const lines = [];
  lines.push("# Backup Schedule Verification");
  lines.push("");
  lines.push(`Generated: ${generatedAt}`);
  lines.push("");

  for (const check of checks) {
    lines.push(`- [${check.status}] ${check.item}: ${check.evidence}`);
  }

  lines.push("");
  lines.push("## Required Platform Checks");
  lines.push("");
  lines.push("- Vercel: verify automated deployment backups and retention.");
  lines.push("- Git hosting: verify branch protection + remote snapshot retention.");
  lines.push("- Google Workspace/Sheets: verify scheduled export/snapshot and last successful run.");
  lines.push("- Secret manager/env vars: verify periodic encrypted backup and restore procedure.");

  const safeTimestamp = generatedAt.replace(/[:.]/g, "-");
  const reportPath = path.join(outDir, `backup-audit-${safeTimestamp}.md`);
  await fs.writeFile(reportPath, `${lines.join("\n")}\n`, "utf8");

  console.log(`Backup audit report: ${reportPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
