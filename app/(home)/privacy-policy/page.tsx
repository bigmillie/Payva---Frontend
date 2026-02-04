import FollowUs from "@/app/components/faq/FollowUs";
import MoreWays from "@/app/components/faq/MoreWays";
import PrivacyHero from "@/app/components/pricacy/PrivacyHero";
import PrivacyMainTab from "@/app/components/pricacy/PrivacyMainTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Your Data Protection & Privacy | Payva Payment",
  description:
    "Read Payva Payment's Privacy Policy to understand how we protect your personal data and ensure your privacy while using our global money transfer services.",

  alternates: {
    canonical: "https://payvapayment.com/privacy-policy",
  },

  icons: {
    icon: "/favicon.ico", // browser tab
    shortcut: "/favicon.ico", // legacy
    apple: "/opengraph-image.webp", // iOS home screen
  },

  openGraph: {
    title: "Payva Payment Privacy Policy — Commitment to Your Data Security",
    description:
      "Learn about Payva Payment's dedication to safeguarding your personal information and maintaining your privacy in all global transactions.",
    url: "https://payvapayment.com/privacy-policy",
    siteName: "Payva Payment",
    images: [
      {
        url: "/seo/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Payva Payment Privacy Policy",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Payva Payment Privacy Policy — Your Data Protection",
    description:
      "Understand how Payva Payment protects your personal data and privacy while facilitating global money transfers.",
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

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyMainTab />
      <MoreWays />
      <FollowUs />
    </main>
  );
}
