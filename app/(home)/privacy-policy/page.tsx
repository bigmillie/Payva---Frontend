import FollowUs from "@/app/components/faq/FollowUs";
import MoreWays from "@/app/components/faq/MoreWays";
import PrivacyHero from "@/app/components/pricacy/PrivacyHero";
import PrivacyMainTab from "@/app/components/pricacy/PrivacyMainTab";

const page = () => {
  return (
    <main>
      <PrivacyHero />
      <PrivacyMainTab />
      <MoreWays />
      <FollowUs />
    </main>
  );
};

export default page;
