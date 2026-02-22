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
];
const execFileAsync = promisify(execFile);

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    outDir: "reports/perf",
    urls: DEFAULT_URLS,
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    const next = args[i + 1];

    if (arg === "--out-dir" && next) {
      options.outDir = next;
      i += 1;
    } else if (arg === "--url" && next) {
      options.urls = [...options.urls, next];
      i += 1;
    }
  }

  return options;
}

async function runLighthouse(url, strategy, tempDir) {
  const safeUrl = url.replace(/[^a-z0-9]/gi, "-").toLowerCase();
  const outputPath = path.join(tempDir, `${safeUrl}-${strategy}.json`);
  const args = [
    "--yes",
    "lighthouse",
    url,
    "--quiet",
    "--chrome-flags=--headless=new --no-sandbox",
    "--only-categories=performance,accessibility",
    "--output=json",
    `--output-path=${outputPath}`,
  ];

  if (strategy === "desktop") {
    args.push("--preset=desktop");
  }

  await execFileAsync("npx", args, { maxBuffer: 10 * 1024 * 1024 });
  const report = await fs.readFile(outputPath, "utf8");
  return JSON.parse(report);
}

function getAudit(audits, key) {
  if (!audits || !audits[key]) return { display: "n/a", value: null };
  return {
    display: audits[key].displayValue || "n/a",
    value: audits[key].numericValue ?? null,
  };
}

function toScore(value) {
  if (typeof value !== "number") return null;
  return Math.round(value * 100);
}

function formatMs(value) {
  if (typeof value !== "number") return "n/a";
  return `${(value / 1000).toFixed(2)}s`;
}

function topOpportunities(audits) {
  if (!audits) return [];

  return Object.values(audits)
    .filter(
      (audit) =>
        audit.details?.type === "opportunity" &&
        typeof audit.numericValue === "number" &&
        audit.numericValue > 0,
    )
    .sort((a, b) => (b.numericValue || 0) - (a.numericValue || 0))
    .slice(0, 5)
    .map((audit) => ({
      title: audit.title,
      savingsMs: Math.round((audit.numericValue || 0) / 1000),
    }));
}

function buildRecommendations(result) {
  const recommendations = [];

  if (result.lcpMs !== null && result.lcpMs > 2500) {
    recommendations.push(
      "Improve LCP: prioritize hero image optimization and reduce render-blocking resources.",
    );
  }
  if (result.inpMs !== null && result.inpMs > 200) {
    recommendations.push(
      "Improve INP: defer non-critical JavaScript and reduce third-party script main-thread work.",
    );
  }
  if (result.cls !== null && result.cls > 0.1) {
    recommendations.push(
      "Improve CLS: reserve fixed dimensions for media and avoid layout shifts from dynamic content.",
    );
  }
  if (result.performanceScore !== null && result.performanceScore < 90) {
    recommendations.push(
      "Raise performance score by addressing top Lighthouse opportunities listed in this report.",
    );
  }

  return recommendations;
}

function toMarkdown(results, timestamp) {
  const lines = [];
  lines.push("# Core Web Vitals and Performance Plan");
  lines.push("");
  lines.push(`Generated: ${timestamp}`);
  lines.push("");

  for (const result of results) {
    lines.push(`## ${result.url} (${result.strategy})`);
    lines.push("");
    lines.push(`- Performance score: ${result.performanceScore ?? "n/a"}`);
    lines.push(`- Accessibility score: ${result.accessibilityScore ?? "n/a"}`);
    lines.push(`- LCP: ${result.lcpDisplay} (${formatMs(result.lcpMs)})`);
    lines.push(`- INP: ${result.inpDisplay} (${formatMs(result.inpMs)})`);
    lines.push(`- CLS: ${result.clsDisplay}`);

    if (result.opportunities.length > 0) {
      lines.push("- Top opportunities:");
      for (const item of result.opportunities) {
        lines.push(`  - ${item.title} (est. ${item.savingsMs}s savings)`);
      }
    }

    const recommendations = buildRecommendations(result);
    if (recommendations.length > 0) {
      lines.push("- Recommended actions:");
      for (const recommendation of recommendations) {
        lines.push(`  - ${recommendation}`);
      }
    }

    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

async function main() {
  const options = parseArgs();
  const timestamp = new Date().toISOString();
  const tempDir = path.resolve("/tmp/payva-artifacts");
  await fs.mkdir(tempDir, { recursive: true });

  const results = [];

  for (const url of options.urls) {
    for (const strategy of ["mobile", "desktop"]) {
      const payload = await runLighthouse(url, strategy, tempDir);
      const lighthouse = payload;
      const audits = lighthouse?.audits || {};

      const lcp = getAudit(audits, "largest-contentful-paint");
      const inp = getAudit(audits, "interaction-to-next-paint");
      const cls = getAudit(audits, "cumulative-layout-shift");

      results.push({
        url,
        strategy,
        performanceScore: toScore(lighthouse?.categories?.performance?.score),
        accessibilityScore: toScore(
          lighthouse?.categories?.accessibility?.score,
        ),
        lcpDisplay: lcp.display,
        lcpMs: lcp.value,
        inpDisplay: inp.display,
        inpMs: inp.value,
        clsDisplay: cls.display,
        cls: cls.value,
        opportunities: topOpportunities(audits),
      });
    }
  }

  const outDir = path.resolve(options.outDir);
  await fs.mkdir(outDir, { recursive: true });

  const safeTimestamp = timestamp.replace(/[:.]/g, "-");
  const jsonPath = path.join(outDir, `pagespeed-${safeTimestamp}.json`);
  const mdPath = path.join(outDir, `core-web-vitals-plan-${safeTimestamp}.md`);

  await fs.writeFile(jsonPath, `${JSON.stringify(results, null, 2)}\n`, "utf8");
  await fs.writeFile(mdPath, toMarkdown(results, timestamp), "utf8");

  console.log(`Performance report written: ${jsonPath}`);
  console.log(`Plan written: ${mdPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
