import type { Metadata } from "next";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";

export const metadata: Metadata = {
  title: {
    default: "Payva — Seamless Global Money Transfers",
    template: "%s | Payva",
  },
  description:
    "Seamless global money transfers made simple. Payva is the most convenient money transfer platform to help individuals and businesses send, receive, and manage money efficiently across borders.",
  keywords: [
    "global money transfer",
    "international payments",
    "cross-border payments",
    "send money abroad",
    "business money transfer",
    "fintech platform",
    "international remittance",
    "Payva",
  ],
  authors: [{ name: "Payva" }],
  creator: "Payva",
  publisher: "Payva",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://payvapayment.com", // replace with your real domain
    siteName: "Payva",
    title: "Seamless Global Money Transfers | Payva",
    description:
      "The most convenient money transfer platform to help you manage global payments faster, smarter, and more efficiently.",
    images: [
      {
        url: "/seo-banner.webp",
        width: 1200,
        height: 630,
        alt: "Payva — Seamless Global Money Transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seamless Global Money Transfers | Payva",
    description:
      "Send, receive, and manage global payments effortlessly with Payva — built for individuals and businesses.",
    images: ["/seo-banner.webp"],
  },
  alternates: {
    canonical: "https://payvapayment.com",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
