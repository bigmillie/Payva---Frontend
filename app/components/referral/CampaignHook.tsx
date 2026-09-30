import { referralCampaign } from "@/utils/contents/referral";
import { ReferralCtaButton } from "./ReferralCta";

export default function CampaignHook() {
  const { name, reward, minTransfer } = referralCampaign;

  return (
    <section className="bg-[#E6F9F7]">
      <div className="mx-auto max-w-336 px-4 md:px-12 py-20 md:py-32 font-famil grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-[-0.03em] text-[#09253F]">
          You know your people.{" "}
          <span className="text-[#006D68]">
            We&rsquo;ll reward you for bringing them.
          </span>
        </h2>

        <div className="flex flex-col gap-6 items-start">
          <p className="text-base md:text-lg leading-relaxed text-[#2A2A2A]">
            {name} is Payva&rsquo;s referral programme for people who know
            someone who should be using Payva. Send your unique referral link.
            When your friend signs up through your link and completes a
            qualifying ${minTransfer}+ transfer, you both get ${reward}.
          </p>
          <ReferralCtaButton location="hook" />
        </div>
      </div>
    </section>
  );
}
