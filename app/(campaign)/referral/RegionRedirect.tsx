"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { detectCountryCode } from "@/utils/location";
import { referralPage } from "@/utils/routes";

// Fallback for when the host doesn't send a country header: look the visitor
// up with the same location check the currency picker uses (UK -> uk, else ca).
export default function RegionRedirect({ query }: { query: string }) {
  const router = useRouter();

  useEffect(() => {
    detectCountryCode().then((country) => {
      const region = country === "GB" ? "uk" : "ca";
      router.replace(`${referralPage}/${region}${query}`);
    });
  }, [router, query]);

  return null;
}
