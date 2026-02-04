import FollowUs from "@/app/components/faq/FollowUs";
import MoreWays from "@/app/components/faq/MoreWays";
import TermsHero from "@/app/components/pricacy/TermsHero";
import TermsMainTab from "@/app/components/pricacy/TermsMainTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Payva Payment User Agreement & Policies",
  description:
    "Read Payva Payment's Terms of Service to understand the rules and guidelines for using our global money transfer services.",

  alternates: {
    canonical: "https://payvapayment.com/terms",
  },

  icons: {
    icon: "/favicon.ico", // browser tab
    shortcut: "/favicon.ico", // legacy
    apple: "/opengraph-image.webp", // iOS home screen
  },

  openGraph: {
    title: "Payva Payment Terms of Service — User Agreement & Policies",
    description:
      "Learn about Payva Payment's Terms of Service, including user responsibilities and service guidelines for global money transfers.",
    url: "https://payvapayment.com/terms",
    siteName: "Payva Payment",
    images: [
      {
        url: "/seo/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Payva Payment Terms of Service",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Payva Payment Terms of Service — User Agreement",
    description:
      "Understand Payva Payment's Terms of Service and guidelines for using our global money transfer platform.",
    images: ["/seo/opengraph-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function TermsPage() {
  return (
    <main>
      <TermsHero />
      <TermsMainTab />
      <MoreWays />
      <FollowUs />
    </main>
  );
}
