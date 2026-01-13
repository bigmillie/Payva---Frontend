import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Everything You Need for Global Payments | Payva",
  description:
    "Explore Payva’s powerful features for fast, secure, and affordable cross-border payments. Send, receive, pay bills, and manage money seamlessly.",

  alternates: {
    canonical: "https://payvapayment.com/features",
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
  },
};
