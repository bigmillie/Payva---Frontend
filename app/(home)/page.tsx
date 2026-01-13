import ReadyToExperience from "../components/commons/ReadyToExperience";
import FAQTabs from "../components/faq/FAQTabs";
import FeatureCarousel from "../components/home/FeatureCarousel";
import HomeHero from "../components/home/HomeHero";
import ValueProposition from "../components/home/ValueProposition";

export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <ValueProposition />
      <FeatureCarousel />
      <FAQTabs />
      <ReadyToExperience />
    </main>
  );
}
