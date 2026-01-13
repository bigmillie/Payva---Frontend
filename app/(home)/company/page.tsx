import AboutUs from "@/app/components/company/AboutUs";
import ChoosePayva from "@/app/components/company/ChoosePayva";
import CompanyHero from "@/app/components/company/CompanyHero";
import OurLeadership from "@/app/components/company/OurLeadership";
import OurLens from "@/app/components/company/OurLens";
import OurValues from "@/app/components/company/OurValues";
import FAQTabs from "@/app/components/faq/FAQTabs";

const page = () => {
  return (
    <div>
      <CompanyHero />
      <AboutUs />
      <OurLens />
      <OurValues />
      <OurLeadership />
      <FAQTabs />
      <ChoosePayva />
    </div>
  );
};

export default page;
