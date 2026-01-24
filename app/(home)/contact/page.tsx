import ContactUsForm from "@/app/components/faq/ContactUsForm";
import FaqHero from "@/app/components/faq/FaqHero";
import FAQMainTabsFull from "@/app/components/faq/FAQMainTabsFull";
import FollowUs from "@/app/components/faq/FollowUs";
import MoreWays from "@/app/components/faq/MoreWays";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — We're Here to Help | Payva Payment",
  description:
    "Have questions or need assistance? Contact Payva Payment's support team for help with your global money transfers and account management.",

  alternates: {
    canonical: "https://payvapayment.com/contact",
  },

  icons: {
    icon: "/favicon.ico", // browser tab
    shortcut: "/favicon.ico", // legacy
    apple: "/opengraph-image.webp", // iOS home screen
  },

  openGraph: {
    title: "Contact Payva Payment — Support for Your Global Payments",
    description:
      "Reach out to Payva Payment's support team for assistance with international money transfers and account inquiries.",
    url: "https://payvapayment.com/contact",
    siteName: "Payva Payment",
    images: [
      {
        url: "/seo/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact Payva Payment Support",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Payva Payment — We're Here to Help",
    description:
      "Get in touch with Payva Payment's support team for help with your global money transfers.",
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

export default function ContactPage() {
  return (
    <main>
      <FaqHero />
      <FAQMainTabsFull />
      <ContactUsForm />
      <MoreWays />
      <FollowUs />
    </main>
  );
}
