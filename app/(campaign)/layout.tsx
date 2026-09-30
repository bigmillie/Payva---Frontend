import Footer from "../components/commons/Footer";
import ReferralNav from "../components/referral/ReferralNav";
import { ReferralCtaProvider } from "../components/referral/ReferralCta";

export default function CampaignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReferralCtaProvider>
      <ReferralNav />
      {children}
      <Footer />
    </ReferralCtaProvider>
  );
}
