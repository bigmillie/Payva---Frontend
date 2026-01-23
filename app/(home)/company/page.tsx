import AboutUs from "@/app/components/company/AboutUs";
import ChoosePayva from "@/app/components/company/ChoosePayva";
import CompanyHero from "@/app/components/company/CompanyHero";
import OurLeadership from "@/app/components/company/OurLeadership";
import OurLens from "@/app/components/company/OurLens";
import OurValues from "@/app/components/company/OurValues";
import FAQSection from "@/app/components/faq/FAQSection";
import { ourCompanyFAQs } from "@/utils/contents";
import Script from "next/script";

<Script
  id="company-structured-data"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: "Payva",
      url: "https://payvapayment.com/company",
      logo: "https://payvapayment.com/logo.png",
      image: "https://payvapayment.com/seo/company-og.webp",
      description:
        "Payva is a modern financial platform enabling secure, fast, and transparent cross-border money transfers for individuals and businesses.",
      brand: {
        "@type": "Brand",
        name: "Payva",
      },
      sameAs: [
        "https://twitter.com/payva",
        "https://www.linkedin.com/company/payva",
        "https://www.instagram.com/payva",
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "Nigeria",
        },
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "Country",
          name: "United States",
        },
      ],
      serviceType: [
        "International Money Transfer",
        "Cross-Border Payments",
        "Remittance Services",
      ],
      offers: {
        "@type": "Offer",
        name: "Zero Transfer Fee International Payments",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    }),
  }}
/>;

const page = () => {
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
};

export default page;
