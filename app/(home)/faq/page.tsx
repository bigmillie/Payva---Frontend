import ContactUsForm from "@/app/components/faq/ContactUsForm";
import FaqHero from "@/app/components/faq/FaqHero";
import FAQMainTab from "@/app/components/faq/FAQMainTab";
import FollowUs from "@/app/components/faq/FollowUs";
import MoreWays from "@/app/components/faq/MoreWays";

const page = () => {
  return (
    <div>
      <FaqHero />
      <FAQMainTab />
      <ContactUsForm />
      <MoreWays />
      <FollowUs />
    </div>
  );
};

export default page;
