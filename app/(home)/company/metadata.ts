import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Payva Payment — Cross-Border Payment Company",
    template: "%s | Payva Payment",
  },
  description:
    "Payva Payment is a modern financial platform enabling secure, fast, and transparent cross-border money transfers for individuals and businesses.",
  keywords: [
    "Payva Payment",
    "cross-border payments",
    "international money transfer",
    "remittance services",
    "financial services Nigeria",
    "financial services UK",
  ],
  authors: [{ name: "Payva Payment" }],
  creator: "Payva Payment",
  publisher: "Payva Payment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://payvapayment.com/company",
  },
  openGraph: {
    title: "Payva Payment — Cross-Border Payment Company",
    description:
      "Payva Payment is a modern financial platform enabling secure, fast, and transparent cross-border money transfers for individuals and businesses.",
    url: "https://payvapayment.com/company",
    siteName: "Payva Payment",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/seo/company-og.webp",
        width: 1200,
        height: 630,
        alt: "Payva Payment — Cross-Border Payment Company",
      },
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "Payva Payment Favicon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payva Payment — Cross-Border Payment Company",
    description:
      "Payva Payment enables individuals and businesses to send and receive money across borders securely and efficiently.",
    images: ["/seo/company-og.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
