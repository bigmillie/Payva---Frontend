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

export function formatDate(dateString?: string) {
  if (!dateString) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

export function stripHtml(value?: string | null) {
  if (!value) return "";

  return decodeHtmlEntities(
    value
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

export function getExcerptFromHtml(value?: string | null, length = 180) {
  const plainText = stripHtml(value);
  if (!plainText) return "";
  if (plainText.length <= length) return plainText;
  return `${plainText.slice(0, length).trimEnd()}...`;
}

export function estimateReadingTimeFromHtml(value?: string | null) {
  const wordsPerMinute = 220;
  const wordCount = stripHtml(value).split(/\s+/).filter(Boolean).length;

  if (!wordCount) return 1;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function slugify(value?: string | null) {
  if (!value) return "";

  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function parseKeywords(value?: string | string[] | null) {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.map((item) => item.trim()).filter(Boolean);
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function findFirstImageUrl(html?: string | null) {
  if (!html) return null;

  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || null;
}

export function sanitizeZohoHtml(html?: string | null) {
  if (!html) return "";

  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<(iframe|object|embed|link|meta)[\s\S]*?>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(iframe|object|embed|link|meta)[^>]*\/?>/gi, "")
    .replace(/\son[a-z]+=("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\sstyle=("[^"]*"|'[^']*')/gi, "")
    .replace(/\sclass=("[^"]*"|'[^']*')/gi, "")
    .replace(/\sid=("[^"]*"|'[^']*')/gi, "")
    .replace(/(href|src)=("|')\s*javascript:[\s\S]*?\2/gi, '$1="#"');
}
