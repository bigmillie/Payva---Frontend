import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { referralPage } from "@/utils/routes";

// /referral sends each visitor to their country's campaign. Vercel sets
// x-vercel-ip-country on every request; anyone outside the UK (or when the
// header is missing, e.g. locally) gets the Canada page. Query strings such
// as UTM tags are carried over so campaign tracking survives the redirect.
export default async function ReferralRedirect({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const country = (await headers()).get("x-vercel-ip-country");
  const region = country === "GB" ? "uk" : "ca";

  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(await searchParams)) {
    for (const v of [value].flat()) if (v !== undefined) query.append(key, v);
  }
  const qs = query.toString();

  redirect(`${referralPage}/${region}${qs ? `?${qs}` : ""}`);
}
