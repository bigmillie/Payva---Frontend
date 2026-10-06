import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { referralPage } from "@/utils/routes";
import RegionRedirect from "./RegionRedirect";

// /referral sends each visitor to their country's campaign. Where the host
// sets x-vercel-ip-country we redirect on the server; otherwise (e.g. locally)
// RegionRedirect runs the same IP lookup as the currency picker in the browser.
// Anyone outside the UK gets the Canada page. Query strings such as UTM tags
// are carried over so campaign tracking survives the redirect.
export default async function ReferralRedirect({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const country = (await headers()).get("x-vercel-ip-country");

  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(await searchParams)) {
    for (const v of [value].flat()) if (v !== undefined) query.append(key, v);
  }
  const qs = query.toString();

  if (!country) return <RegionRedirect query={qs ? `?${qs}` : ""} />;

  const region = country === "GB" ? "uk" : "ca";
  redirect(`${referralPage}/${region}${qs ? `?${qs}` : ""}`);
}
