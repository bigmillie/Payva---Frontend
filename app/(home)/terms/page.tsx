import FollowUs from "@/app/components/faq/FollowUs";
import MoreWays from "@/app/components/faq/MoreWays";
import TermsHero from "@/app/components/pricacy/TermsHero";
import TermsMainTab from "@/app/components/pricacy/TermsMainTab";

const page = () => {
  return (
    <main>
      <TermsHero />
      <TermsMainTab />
      <MoreWays />
      <FollowUs />
    </main>
  );
};

export default page;
