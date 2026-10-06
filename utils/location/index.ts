// Shared IP-based country lookup. The currency picker and the /referral
// redirect both use this, so a visitor is only looked up once per page load.
let pending: Promise<string | null> | null = null;

export const detectCountryCode = (): Promise<string | null> => {
  if (!pending) {
    pending = fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) =>
        typeof data.country_code === "string" ? data.country_code : null,
      )
      .catch(() => null);
  }
  return pending;
};
