import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import { CurrencyProvider } from "@/context/CurrencyContext";
import "./globals.css";

/* -------------------------------
   Fonts
-------------------------------- */
const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen-grotesk",
  display: "swap",
});

/* -------------------------------
   Metadata
-------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://payvapayment.com"),

  title: {
    default: "Payva Payment — Seamless Global Money Transfers",
    template: "%s | Payva Payment",
  },

  description:
    "Seamless global money transfers made simple. Payva helps individuals and businesses send, receive, and manage money efficiently across borders.",

  keywords: [
    "global money transfer",
    "international payments",
    "cross-border payments",
    "send money abroad",
    "business money transfer",
    "fintech platform",
    "international remittance",
    "Payva Payment",
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
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://payvapayment.com",
  },

  /* -------------------------------
     Icons (Correct Way)
  -------------------------------- */
  icons: {
    icon: "/favicon.ico", // browser tab
    shortcut: "/favicon.ico", // legacy
    apple: "/apple-touch-icon.png", // iOS home screen
  },

  /* -------------------------------
     Open Graph
  -------------------------------- */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://payvapayment.com",
    siteName: "Payva",
    title: "Payva Payment — Seamless Global Money Transfers",
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

  /* -------------------------------
     Twitter
  -------------------------------- */
  twitter: {
    card: "summary_large_image",
    title: "Payva Payment — Seamless Global Money Transfers",
    description:
      "Send, receive, and manage global payments effortlessly with Payva — built for individuals and businesses.",
    images: ["/seo-banner.webp"],
    creator: "@payvapayment", // optional
  },
};

/* -------------------------------
   Root Layout
-------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={familjenGrotesk.variable}>
      <body className="antialiased">
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}
