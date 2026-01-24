import AboutUs from "@/app/components/company/AboutUs";
import ChoosePayva from "@/app/components/company/ChoosePayva";
import CompanyHero from "@/app/components/company/CompanyHero";
import OurLeadership from "@/app/components/company/OurLeadership";
import OurLens from "@/app/components/company/OurLens";
import OurValues from "@/app/components/company/OurValues";
import FAQSection from "@/app/components/faq/FAQSection";
import { ourCompanyFAQs } from "@/utils/contents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Learn More About Payva Payment | Our Story & Values",
  description:
    "Discover Payva Payment's mission, vision, and values. Learn how we are revolutionizing global money transfers for individuals and businesses worldwide.",

  alternates: {
    canonical: "https://payvapayment.com/company",
  },

  icons: {
    icon: "/favicon.ico", // browser tab
    shortcut: "/favicon.ico", // legacy
    apple: "/opengraph-image.webp", // iOS home screen
  },

  openGraph: {
    title: "About Payva Payment — Our Story & Commitment to You",
    description:
      "Learn about Payva Payment's journey, leadership, and dedication to providing seamless global money transfer solutions.",
    url: "https://payvapayment.com/company",
    siteName: "Payva Payment",
    images: [
      {
        url: "/seo/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "About Payva Payment",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Payva Payment — Our Story & Values",
    description:
      "Discover Payva Payment's mission and vision for revolutionizing global money transfers.",
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

export default function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <AboutUs />
      <OurLens />
      <OurValues />
      <OurLeadership />
      <FAQSection
        faqs={ourCompanyFAQs}
        subtitle="Here Are Answers to Some of our Frequently Asked Questions"
      />
      <ChoosePayva />
    </main>
  );
}
