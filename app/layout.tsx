import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import { CurrencyProvider } from "@/context/CurrencyContext";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";

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
    template: "%s - Payva Payment Your Seamless Global Money Transfers",
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

  applicationName: "Payva Payment",
  referrer: "origin-when-cross-origin",

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
    apple: "https://www.payvapayment.com/thumbnail.jpeg", // iOS home screen
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
        url: "https://www.payvapayment.com/thumbnail.jpeg",
        width: 180,
        height: 180,
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
    images: ["https://www.payvapayment.com/thumbnail.jpeg"],
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
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <CurrencyProvider>{children}</CurrencyProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
