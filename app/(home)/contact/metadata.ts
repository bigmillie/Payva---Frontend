import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs & Support — Get Help with Payva",
  description:
    "Find answers to frequently asked questions about Payva. Learn how to send, receive, and manage cross-border payments securely and effortlessly.",

  alternates: {
    canonical: "https://payvapayment.com/faq",
  },

  openGraph: {
    title: "Payva Payment FAQs — We’ve Got Answers",
    description:
      "Get help with Payva. Explore FAQs or reach out to support for assistance with international money transfers.",
    url: "https://payvapayment.com/faq",
    siteName: "Payva Payment",
    images: [
      {
        url: "/seo/faq-og.webp", // NEW filename (important)
        width: 1200,
        height: 630,
        alt: "Payva FAQ and Support",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Payva Payment FAQs & Support",
    description:
      "Answers to common questions about Payva’s cross-border payment services.",
    images: ["/seo/faq-og.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
