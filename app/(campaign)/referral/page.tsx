import { Metadata } from "next";
import ReferralHero from "@/app/components/referral/ReferralHero";
import CampaignHook from "@/app/components/referral/CampaignHook";
import HowItWorks from "@/app/components/referral/HowItWorks";
import Testimonials from "@/app/components/referral/Testimonials";
import BallerOfTheWeek from "@/app/components/referral/BallerOfTheWeek";
import ReferralFAQ from "@/app/components/referral/ReferralFAQ";
import FinalCta from "@/app/components/referral/FinalCta";
import ReferralTerms from "@/app/components/referral/ReferralTerms";

const title = "Canada Connections — Refer a Friend, You Both Get $20";
const description =
  "Refer a friend to Payva. When they sign up and complete a qualifying $200+ transfer, you both get $20. Up to 5 referrals, up to $100.";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical: "https://payvapayment.com/referral",
  },

  openGraph: {
    title: "Bring your people. Get rewarded. — Payva Canada Connections",
    description,
    url: "https://payvapayment.com/referral",
    siteName: "Payva Payment",
    images: [
      {
        url: "/seo/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Payva Canada Connections referral campaign",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bring your people. Get rewarded. — Payva Canada Connections",
    description,
    images: ["/seo/opengraph-image.webp"],
  },
};

export default function ReferralPage() {
  return (
    <main>
      <ReferralHero />
      <CampaignHook />
      <HowItWorks />
      <Testimonials />
      <BallerOfTheWeek />
      <ReferralFAQ />
      <FinalCta />
      <ReferralTerms />
    </main>
  );
}
