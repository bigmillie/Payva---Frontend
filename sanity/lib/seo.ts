export const SITE_URL = "https://www.payvapayment.com";
export const SITE_NAME = "Payva Payment";
export const SITE_DESCRIPTION =
  "Payva helps you send money globally with fast, secure, and affordable cross-border payments.";

export function toAbsoluteUrl(pathOrUrl: string) {
  if (!pathOrUrl) return SITE_URL;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function estimateReadingTime(blocks: TypedObject[]) {
  const wordsPerMinute = 220;

  const text = blocks
    .map((block) => {
      const blockRecord = block as unknown as Record<string, unknown>;
      const children = Array.isArray(blockRecord.children)
        ? (blockRecord.children as Array<Record<string, unknown>>)
        : [];

      return children
        .map((child) => String(child.text ?? ""))
        .join(" ")
        .trim();
    })
    .filter(Boolean)
    .join(" ");

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (!wordCount) return 1;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function formatDate(dateString?: string) {
  if (!dateString) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}
import type { TypedObject } from "@portabletext/types";
