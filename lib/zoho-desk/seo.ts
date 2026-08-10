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

type HtmlImageOptions = {
  baseUrl?: string;
  skipPlaceholderImages?: boolean;
};

const ZOHO_EDITOR_PLACEHOLDER_HOST = "static.zohocdn.com";
const ZOHO_EDITOR_PLACEHOLDER_PATHS = new Set([
  "/zoho-desk-editor/static/images/file.png",
  "/zoho-desk-editor/static/images/image.png",
  "/zoho-desk-editor/static/images/audio.png",
  "/zoho-desk-editor/static/images/video.png",
]);

export function normalizeAssetUrl(url?: string | null, baseUrl = SITE_URL) {
  if (!url) return null;

  const decodedUrl = decodeHtmlEntities(url).trim();
  if (!decodedUrl || /^javascript:/i.test(decodedUrl)) return null;
  if (decodedUrl.startsWith("data:") || decodedUrl.startsWith("blob:")) {
    return decodedUrl;
  }

  try {
    if (decodedUrl.startsWith("//")) {
      return new URL(`https:${decodedUrl}`).toString();
    }

    if (/^https?:\/\//i.test(decodedUrl)) {
      return new URL(decodedUrl).toString();
    }

    return new URL(decodedUrl, baseUrl).toString();
  } catch {
    return null;
  }
}

export function isPlaceholderImageUrl(url?: string | null) {
  const normalizedUrl = normalizeAssetUrl(url);
  if (!normalizedUrl || normalizedUrl.startsWith("data:")) return false;

  try {
    const parsedUrl = new URL(normalizedUrl);
    const normalizedPath = parsedUrl.pathname.replace(/\/+$/, "").toLowerCase();

    return (
      parsedUrl.hostname.toLowerCase() === ZOHO_EDITOR_PLACEHOLDER_HOST &&
      ZOHO_EDITOR_PLACEHOLDER_PATHS.has(normalizedPath)
    );
  } catch {
    return false;
  }
}

export function findFirstImageUrl(
  html?: string | null,
  options: HtmlImageOptions = {},
) {
  if (!html) return null;

  const imageMatches = html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi);

  for (const match of imageMatches) {
    const normalizedUrl = normalizeAssetUrl(match[1], options.baseUrl);
    if (!normalizedUrl) continue;
    if (options.skipPlaceholderImages !== false && isPlaceholderImageUrl(normalizedUrl)) {
      continue;
    }

    return normalizedUrl;
  }

  return null;
}

export function sanitizeZohoHtml(
  html?: string | null,
  options: HtmlImageOptions = {},
) {
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
    .replace(/(href|src)=("|')\s*javascript:[\s\S]*?\2/gi, '$1="#"')
    .replace(
      /<img\b([^>]*?)\bsrc=(["'])([^"']+)\2([^>]*)>/gi,
      (_match, beforeSrc, _quote, src, afterSrc) => {
        const normalizedUrl = normalizeAssetUrl(src, options.baseUrl);

        if (!normalizedUrl) return "";
        if (options.skipPlaceholderImages !== false && isPlaceholderImageUrl(normalizedUrl)) {
          return "";
        }

        return `<img${beforeSrc}src="${normalizedUrl}"${afterSrc}>`;
      },
    )
    .replace(
      /<a\b([^>]*?)\bhref=(["'])([^"']+)\2([^>]*)>/gi,
      (_match, beforeHref, _quote, href, afterHref) => {
        const normalizedUrl = normalizeAssetUrl(href, options.baseUrl);
        if (!normalizedUrl) {
          return `<a${beforeHref}href="#"${afterHref}>`;
        }

        return `<a${beforeHref}href="${normalizedUrl}"${afterHref}>`;
      },
    );
}
