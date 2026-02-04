import ReadyToExperience from "@/app/components/commons/ReadyToExperience";
import FAQSection from "@/app/components/faq/FAQSection";
import FeatureHero from "@/app/components/features/FeatureHero";
import OurFeatures from "@/app/components/features/OurFeatures";
import UniqueSellingPoint from "@/app/components/features/UniqueSellingPoint";
import { ourFeaturesFAQs } from "@/utils/contents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Everything You Need for Global Payments | Payva",
  description:
    "Explore Payva’s powerful features for fast, secure, and affordable cross-border payments. Send, receive, pay bills, and manage money seamlessly.",

  alternates: {
    canonical: "https://payvapayment.com/features",
  },

  icons: {
    icon: "/favicon.ico", // browser tab
    shortcut: "/favicon.ico", // legacy
    apple: "/opengraph-image.webp", // iOS home screen
  },

  openGraph: {
    title: "Payva Features — One App for Global Payments",
    description:
      "From international transfers to bill payments, Payva brings everything you need for cross-border payments into one secure app.",
    url: "https://payvapayment.com/features",
    siteName: "Payva Payment",
    images: [
      {
        url: "/seo/features-og.webp", // NEW image (important)
        width: 1200,
        height: 630,
        alt: "Payva Payment App Features",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Payva Features — Global Payments Made Simple",
    description:
      "Discover Payva’s features built for seamless international money transfers.",
    images: ["/seo/features-og.webp"],
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

export default function FeaturesPage() {
  return (
    <main>
      <FeatureHero />
      <OurFeatures />
      <UniqueSellingPoint />
      <FAQSection
        faqs={ourFeaturesFAQs}
        subtitle="Here Are Answers to Some of our Frequently Asked Questions"
      />
      <ReadyToExperience />
    </main>
  );
}
