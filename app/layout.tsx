import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import { CurrencyProvider } from "@/context/CurrencyContext";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payva payments",
  description: "Move your money as easily as you want.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${familjenGrotesk.variable} antialiased`}>
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}
