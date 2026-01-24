import ReadyToExperience from "../components/commons/ReadyToExperience";
import FeatureCarousel from "../components/home/FeatureCarousel";
import HomeHero from "../components/home/HomeHero";
import ValueProposition from "../components/home/ValueProposition";
import LayersOfSecurity from "../components/home/LayersOfSecurity";
import { ourHomeFAQs } from "@/utils/contents";
import FAQSection from "../components/faq/FAQSection";

export const metadata = {
  title: "Payva Payment — Fast, Secure & Affordable Global Money Transfers",
  description:
    "Experience seamless international money transfers with Payva Payment. Send and receive money globally with low fees and competitive exchange rates.",

  alternates: {
    canonical: "https://payvapayment.com/",
  },

  icons: {
    icon: "/favicon.ico", // browser tab
    shortcut: "/favicon.ico", // legacy
    apple: "/opengraph-image.webp", // iOS home screen
  },

  openGraph: {
    title: "Payva Payment — Your Trusted Partner for Global Money Transfers",
    description:
      "Join millions using Payva Payment for fast, secure, and affordable cross-border money transfers. Sign up today!",
    url: "https://payvapayment.com/",
    siteName: "Payva Payment",
    images: [
      {
        url: "/seo/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Payva Payment App",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Payva Payment — Fast & Secure Global Money Transfers",
    description:
      "Send and receive money internationally with Payva Payment. Enjoy low fees and great exchange rates.",
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

export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <ValueProposition />
      <FeatureCarousel />
      <LayersOfSecurity />
      <FAQSection
        faqs={ourHomeFAQs}
        subtitle="Here Are Answers to Some of our Frequently Asked Questions"
      />
      <ReadyToExperience />
    </main>
  );
}
