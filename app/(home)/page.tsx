import ReadyToExperience from "../components/commons/ReadyToExperience";
import FeatureCarousel from "../components/home/FeatureCarousel";
import HomeHero from "../components/home/HomeHero";
import ValueProposition from "../components/home/ValueProposition";
import LayersOfSecurity from "../components/home/LayersOfSecurity";
import { ourHomeFAQs } from "@/utils/contents";
import FAQSection from "../components/faq/FAQSection";

export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <ValueProposition />
      <FeatureCarousel />
      <LayersOfSecurity />
      <FAQSection
        faqs={ourHomeFAQs}
        subtitle="Here Are Answers to Some of our Frequently Asked Questions"
      />
      <ReadyToExperience />
    </main>
  );
}
