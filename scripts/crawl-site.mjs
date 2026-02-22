#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_START_URL = "https://www.payvapayment.com/";
const DEFAULT_MAX_PAGES = 500;
const USER_AGENT = "payva-seo-audit-bot/1.0";

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    url: DEFAULT_START_URL,
    maxPages: DEFAULT_MAX_PAGES,
    outDir: "reports/crawl",
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    const next = args[i + 1];

    if (arg === "--url" && next) {
      options.url = next;
      i += 1;
    } else if (arg === "--max-pages" && next) {
      options.maxPages = Number(next);
      i += 1;
    } else if (arg === "--out-dir" && next) {
      options.outDir = next;
      i += 1;
    }
  }

  return options;
}

function normalizeUrl(rawUrl, baseOrigin) {
  try {
    if (!rawUrl) return null;

    const trimmed = rawUrl.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("mailto:") || trimmed.startsWith("tel:")) {
      return null;
    }
    if (trimmed.startsWith("javascript:")) return null;

    const resolved = new URL(trimmed, baseOrigin);
    resolved.hash = "";

    if (resolved.pathname !== "/" && resolved.pathname.endsWith("/")) {
      resolved.pathname = resolved.pathname.slice(0, -1);
    }

    return resolved.toString();
  } catch {
    return null;
  }
}

function isInternal(targetUrl, baseOrigin) {
  try {
    return new URL(targetUrl).origin === new URL(baseOrigin).origin;
  } catch {
    return false;
  }
}

function extractHtmlLinks(html, currentUrl, baseOrigin) {
  const links = new Set();
  const hrefRegex = /href\s*=\s*["']([^"']+)["']/gi;

  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    const normalized = normalizeUrl(match[1], currentUrl);
    if (normalized && isInternal(normalized, baseOrigin)) {
      links.add(normalized);
    }
  }

  return [...links];
}

function extractSitemapLocs(xml, baseOrigin) {
  const urls = new Set();
  const locRegex = /<loc>([^<]+)<\/loc>/gi;

  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    const normalized = normalizeUrl(match[1], baseOrigin);
    if (normalized && isInternal(normalized, baseOrigin)) {
      urls.add(normalized);
    }
  }

  return [...urls];
}

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const text = String(value);
  if (!/[",\n]/.test(text)) return text;
  return `"${text.replace(/"/g, '""')}"`;
}

async function writeCsv(filePath, rows) {
  if (rows.length === 0) {
    await fs.writeFile(filePath, "url\n", "utf8");
    return;
  }

  const headers = Object.keys(rows[0]);
  const lines = [headers.join(",")];

  for (const row of rows) {
    lines.push(headers.map((header) => csvEscape(row[header])).join(","));
  }

  await fs.writeFile(filePath, `${lines.join("\n")}\n`, "utf8");
}

async function fetchText(url) {
  const response = await fetch(url, {
    redirect: "manual",
    headers: {
      "user-agent": USER_AGENT,
      accept: "text/html,application/xml;q=0.9,*/*;q=0.8",
    },
  });

  const contentType = response.headers.get("content-type") || "";
  const location = response.headers.get("location") || "";
  const isText =
    contentType.includes("text/html") ||
    contentType.includes("application/xml") ||
    contentType.includes("text/xml");

  let body = "";
  if (isText && response.status !== 304) {
    body = await response.text();
  }

  return {
    response,
    body,
    contentType,
    location,
  };
}

function extractTitle(html) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch) return "";
  return titleMatch[1].replace(/\s+/g, " ").trim();
}

async function crawlSite({ startUrl, maxPages }) {
  const baseOrigin = new URL(startUrl).origin;
  const visited = new Set();
  const queued = new Set([startUrl]);
  const queue = [{ url: startUrl, source: "seed" }];
  const rows = [];

  const sitemapUrl = normalizeUrl("/sitemap.xml", baseOrigin);
  if (sitemapUrl) {
    queue.push({ url: sitemapUrl, source: "seed:sitemap" });
    queued.add(sitemapUrl);
  }

  while (queue.length > 0 && visited.size < maxPages) {
    const current = queue.shift();
    if (!current) break;

    if (visited.has(current.url)) continue;
    visited.add(current.url);

    let status = 0;
    let contentType = "";
    let redirectTo = "";
    let title = "";
    let error = "";

    try {
      const { response, body, contentType: ct, location } = await fetchText(
        current.url,
      );
      status = response.status;
      contentType = ct;
      redirectTo = location;

      const isHtml = ct.includes("text/html");
      const isXml = ct.includes("xml");

      if (status >= 300 && status < 400 && location) {
        const resolvedLocation = normalizeUrl(location, current.url);
        if (resolvedLocation && isInternal(resolvedLocation, baseOrigin)) {
          redirectTo = resolvedLocation;
          if (!queued.has(resolvedLocation) && !visited.has(resolvedLocation)) {
            queue.push({ url: resolvedLocation, source: current.url });
            queued.add(resolvedLocation);
          }
        }
      }

      if (status >= 200 && status < 300 && isHtml) {
        title = extractTitle(body);
        const links = extractHtmlLinks(body, current.url, baseOrigin);
        for (const link of links) {
          if (!queued.has(link) && !visited.has(link)) {
            queue.push({ url: link, source: current.url });
            queued.add(link);
          }
        }
      }

      if (status >= 200 && status < 300 && isXml) {
        const urls = extractSitemapLocs(body, baseOrigin);
        for (const sitemapLink of urls) {
          if (!queued.has(sitemapLink) && !visited.has(sitemapLink)) {
            queue.push({ url: sitemapLink, source: current.url });
            queued.add(sitemapLink);
          }
        }
      }
    } catch (err) {
      error = err instanceof Error ? err.message : "Unknown fetch error";
    }

    rows.push({
      url: current.url,
      source: current.source,
      status,
      live: status >= 200 && status < 300 ? "yes" : "no",
      contentType,
      redirectTo,
      title,
      error,
    });
  }

  return rows.sort((a, b) => a.url.localeCompare(b.url));
}

async function main() {
  const options = parseArgs();
  const startUrl = normalizeUrl(options.url, options.url);

  if (!startUrl) {
    throw new Error("Invalid start URL.");
  }

  const crawledRows = await crawlSite({
    startUrl,
    maxPages: options.maxPages,
  });

  const liveRows = crawledRows
    .filter((row) => row.status === 200)
    .map((row) => ({
      url: row.url,
      title: row.title,
      contentType: row.contentType,
    }));

  const livePageRows = crawledRows
    .filter(
      (row) => row.status === 200 && row.contentType.includes("text/html"),
    )
    .map((row) => ({
      url: row.url,
      title: row.title,
    }));

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outDir = path.resolve(options.outDir);

  await fs.mkdir(outDir, { recursive: true });

  const fullPath = path.join(outDir, `full-crawl-${timestamp}.csv`);
  const livePath = path.join(outDir, `live-urls-200-${timestamp}.csv`);
  const livePagesPath = path.join(outDir, `live-html-pages-${timestamp}.csv`);

  await writeCsv(fullPath, crawledRows);
  await writeCsv(livePath, liveRows);
  await writeCsv(livePagesPath, livePageRows);

  console.log(`Crawl complete: ${crawledRows.length} URLs checked.`);
  console.log(`Full crawl report: ${fullPath}`);
  console.log(`Live URLs report: ${livePath}`);
  console.log(`Live HTML pages report: ${livePagesPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
