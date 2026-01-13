import ContactUsForm from "@/app/components/faq/ContactUsForm";
import FaqHero from "@/app/components/faq/FaqHero";
import FAQMainTab from "@/app/components/faq/FAQMainTab";
import FollowUs from "@/app/components/faq/FollowUs";
import MoreWays from "@/app/components/faq/MoreWays";
import Script from "next/script";

<Script
  id="faq-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Payva work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Payva allows you to send, receive, and manage cross-border payments securely using a single app.",
          },
        },
      ],
    }),
  }}
/>;

const page = () => {
  return (
    <main>
      <FaqHero />
      <FAQMainTab />
      <ContactUsForm />
      <MoreWays />
      <FollowUs />
    </main>
  );
};

export default page;
