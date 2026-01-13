import ReadyToExperience from "@/app/components/commons/ReadyToExperience";
import FAQTabs from "@/app/components/faq/FAQTabs";
import FeatureHero from "@/app/components/features/FeatureHero";
import OurFeatures from "@/app/components/features/OurFeatures";
import UniqueSellingPoint from "@/app/components/features/UniqueSellingPoint";
import Script from "next/script";

const page = () => {
  return (
    <main>
      <FeatureHero />
      <OurFeatures />
      <UniqueSellingPoint />
      <FAQTabs />
      <ReadyToExperience />
    </main>
  );
};

export default page;
