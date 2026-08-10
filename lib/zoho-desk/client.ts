import "server-only";

const DEFAULT_ZOHO_DESK_BASE_URL = "https://desk.zoho.com";
const DEFAULT_ZOHO_ACCOUNTS_BASE_URL = "https://accounts.zoho.com";
const DEFAULT_REVALIDATE_SECONDS = 300;

export const zohoDeskBaseUrl =
  process.env.ZOHO_DESK_BASE_URL || DEFAULT_ZOHO_DESK_BASE_URL;
export const zohoAccountsBaseUrl =
  process.env.ZOHO_ACCOUNTS_BASE_URL || DEFAULT_ZOHO_ACCOUNTS_BASE_URL;
export const zohoDeskOrgId = process.env.ZOHO_DESK_ORG_ID || "";
export const zohoDeskAccessToken = process.env.ZOHO_DESK_ACCESS_TOKEN || "";
export const zohoDeskRefreshToken = process.env.ZOHO_DESK_REFRESH_TOKEN || "";
export const zohoDeskClientId = process.env.ZOHO_DESK_CLIENT_ID || "";
export const zohoDeskClientSecret = process.env.ZOHO_DESK_CLIENT_SECRET || "";
export const zohoDeskRootCategoryIds = (process.env.ZOHO_DESK_ROOT_CATEGORY_IDS || "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

export const isZohoDeskConfigured = Boolean(
  zohoDeskAccessToken ||
    (zohoDeskRefreshToken && zohoDeskClientId && zohoDeskClientSecret),
);

type CachedToken = {
  accessToken: string;
  expiresAt: number;
};

let cachedToken: CachedToken | null = null;
let refreshInFlight: Promise<string> | null = null;

async function refreshZohoDeskAccessToken() {
  if (refreshInFlight) {
    return refreshInFlight;
  }

  const params = new URLSearchParams({
    refresh_token: zohoDeskRefreshToken,
    client_id: zohoDeskClientId,
    client_secret: zohoDeskClientSecret,
    grant_type: "refresh_token",
  });

  refreshInFlight = (async () => {
    const response = await fetch(
      `${zohoAccountsBaseUrl.replace(/\/$/, "")}/oauth/v2/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Zoho token refresh failed: ${response.status} ${errorText}`,
      );
    }

    const payload = (await response.json()) as {
      access_token?: string;
      expires_in?: number;
    };

    if (!payload.access_token) {
      throw new Error("Zoho token refresh response did not include access_token.");
    }

    const expiresInSeconds = payload.expires_in || 3600;
    cachedToken = {
      accessToken: payload.access_token,
      expiresAt: Date.now() + Math.max(60, expiresInSeconds - 60) * 1000,
    };

    return cachedToken.accessToken;
  })();

  try {
    return await refreshInFlight;
  } finally {
    refreshInFlight = null;
  }
}

export async function getZohoDeskAccessToken() {
  if (!isZohoDeskConfigured) {
    throw new Error("Zoho Desk blog is not configured.");
  }

  if (zohoDeskRefreshToken && zohoDeskClientId && zohoDeskClientSecret) {
    if (cachedToken && cachedToken.expiresAt > Date.now()) {
      return cachedToken.accessToken;
    }

    return refreshZohoDeskAccessToken();
  }

  if (!zohoDeskAccessToken) {
    throw new Error("ZOHO_DESK_ACCESS_TOKEN is missing.");
  }

  return zohoDeskAccessToken;
}

export async function zohoDeskFetch<T>(
  pathname: string,
  searchParams?: Record<string, string | number | boolean | undefined>,
) {
  const token = await getZohoDeskAccessToken();
  const url = new URL(pathname, `${zohoDeskBaseUrl.replace(/\/$/, "")}/`);

  Object.entries(searchParams || {}).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    url.searchParams.set(key, String(value));
  });

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      Accept: "application/json",
    },
    next: { revalidate: DEFAULT_REVALIDATE_SECONDS, tags: ["zoho-blog"] },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Zoho Desk request failed for ${pathname}: ${response.status} ${errorText}`,
    );
  }

  if (response.status === 204) {
    return null as T;
  }

  return (await response.json()) as T;
}
