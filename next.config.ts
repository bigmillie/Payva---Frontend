import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

type RedirectRule = {
  source: string;
  destination: string;
  permanent: boolean;
};

function loadRedirectMap(): RedirectRule[] {
  const redirectMapPath = path.join(process.cwd(), "config", "redirect-map.csv");

  if (!fs.existsSync(redirectMapPath)) return [];

  const csv = fs.readFileSync(redirectMapPath, "utf8");
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));

  if (lines.length <= 1) return [];

  return lines.slice(1).reduce<RedirectRule[]>((rules, line) => {
    const [sourceRaw, destinationRaw, statusRaw] = line
      .split(",")
      .map((part) => part.trim());

    if (!sourceRaw || !destinationRaw) return rules;
    if (!sourceRaw.startsWith("/") || !destinationRaw.startsWith("/")) {
      return rules;
    }

    const statusCode = Number(statusRaw || "301");
    rules.push({
      source: sourceRaw,
      destination: destinationRaw,
      permanent: statusCode === 301,
    });

    return rules;
  }, []);
}

function getRemoteImageHostnames() {
  const hostnames = new Set([
    "static.zohocdn.com",
    "desk.zoho.com",
    "support.payvapayment.com",
    "www.payvapayment.com",
  ]);

  const zohoDeskBaseUrl = process.env.ZOHO_DESK_BASE_URL;
  if (zohoDeskBaseUrl) {
    try {
      hostnames.add(new URL(zohoDeskBaseUrl).hostname);
    } catch {
      // Ignore malformed env values and keep the static defaults.
    }
  }

  return [...hostnames];
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getRemoteImageHostnames().map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
  async redirects() {
    return loadRedirectMap();
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
