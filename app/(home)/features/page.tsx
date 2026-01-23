import ReadyToExperience from "@/app/components/commons/ReadyToExperience";
import FAQSection from "@/app/components/faq/FAQSection";
import FeatureHero from "@/app/components/features/FeatureHero";
import OurFeatures from "@/app/components/features/OurFeatures";
import UniqueSellingPoint from "@/app/components/features/UniqueSellingPoint";
import { ourFeaturesFAQs } from "@/utils/contents";

const page = () => {
  return (
    <main>
      <FeatureHero />
      <OurFeatures />
      <UniqueSellingPoint />
      <FAQSection
        faqs={ourFeaturesFAQs}
        subtitle="Here Are Answers to Some of our Frequently Asked Questions"
      />
      <ReadyToExperience />
    </main>
  );
};

export default page;
