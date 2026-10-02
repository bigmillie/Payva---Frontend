import { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/app/components/commons/Footer";
import ReferralNav from "@/app/components/referral/ReferralNav";
import { ReferralCtaProvider } from "@/app/components/referral/ReferralCta";
import ReferralHero from "@/app/components/referral/ReferralHero";
import CampaignHook from "@/app/components/referral/CampaignHook";
import HowItWorks from "@/app/components/referral/HowItWorks";
import Testimonials from "@/app/components/referral/Testimonials";
import BallerOfTheWeek from "@/app/components/referral/BallerOfTheWeek";
import ReferralFAQ from "@/app/components/referral/ReferralFAQ";
import FinalCta from "@/app/components/referral/FinalCta";
import ReferralTerms from "@/app/components/referral/ReferralTerms";
import {
  formatMoney,
  getReferralContent,
  isReferralRegion,
  referralRegions,
} from "@/utils/contents/referral";

type Params = { params: Promise<{ region: string }> };

const siteUrl = "https://payvapayment.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return referralRegions.map((region) => ({ region }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { region } = await params;
  if (!isReferralRegion(region)) return {};

  const { campaign } = getReferralContent(region);
  const reward = formatMoney(campaign, campaign.reward);
  const title = `${campaign.name} — Refer a Friend, You Both Get ${reward}`;
  const description = `Refer a friend to Payva. When they sign up and complete a qualifying ${formatMoney(campaign, campaign.minTransfer)}+ transfer, you both get ${reward}. Up to ${campaign.maxReferrals} referrals, up to ${formatMoney(campaign, campaign.maxEarnings)}.`;
  const url = `${siteUrl}/referral/${region}`;
  const socialTitle = `Bring your people. Get rewarded. — Payva ${campaign.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-CA": `${siteUrl}/referral/ca`,
        "en-GB": `${siteUrl}/referral/uk`,
        "x-default": `${siteUrl}/referral`,
      },
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: "Payva Payment",
      locale: campaign.locale.replace("-", "_"),
      images: [
        {
          url: "/seo/opengraph-image.webp",
          width: 1200,
          height: 630,
          alt: `Payva ${campaign.name} referral campaign`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/seo/opengraph-image.webp"],
    },
  };
}

export default async function ReferralRegionPage({ params }: Params) {
  const { region } = await params;
  if (!isReferralRegion(region)) notFound();

  const { campaign, steps, faqs } = getReferralContent(region);

  return (
    <ReferralCtaProvider
      campaignName={campaign.name}
      appReferralLink={campaign.appReferralLink}
    >
      <ReferralNav region={region} />
      <main>
        <ReferralHero campaign={campaign} />
        <CampaignHook campaign={campaign} />
        <HowItWorks campaign={campaign} steps={steps} />
        <Testimonials testimonials={campaign.testimonials} />
        <BallerOfTheWeek campaign={campaign} />
        <ReferralFAQ faqs={faqs} />
        <FinalCta campaign={campaign} />
        <ReferralTerms campaign={campaign} />
      </main>
      <Footer />
    </ReferralCtaProvider>
  );
}
