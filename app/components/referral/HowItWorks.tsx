import {
  formatMoney,
  type ReferralCampaign,
  type ReferralStep,
} from "@/utils/contents/referral";
import { ReferralCtaButton } from "./ReferralCta";

export default function HowItWorks({
  campaign,
  steps,
}: {
  campaign: ReferralCampaign;
  steps: ReferralStep[];
}) {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-336 px-4 md:px-12 py-20 md:py-28 font-famil">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] text-[#09253F]">
            How to make a {campaign.connection}
          </h2>
          <p className="mt-3 text-lg md:text-xl text-[#4D4D4D]">
            Five steps. That&rsquo;s it.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li
                key={step.number}
                className={`flex flex-col rounded-3xl p-6 md:p-7 ${
                  isLast
                    ? "bg-[#006D68] text-white sm:col-span-2 lg:col-span-1"
                    : "bg-[#F4FFFE] text-[#09253F] border border-[#E6F9F7]"
                }`}
              >
                <span
                  className={`text-sm font-bold tracking-[0.14em] ${
                    isLast ? "text-[#99E1DD]" : "text-[#006D68]"
                  }`}
                >
                  STEP {step.number}
                </span>
                <h3 className="mt-6 text-xl md:text-2xl font-bold leading-tight">
                  {step.title}
                </h3>
                <p
                  className={`mt-2 text-sm md:text-base leading-relaxed ${
                    isLast ? "text-white/85" : "text-[#4D4D4D]"
                  }`}
                >
                  {step.body}
                </p>
                {step.cta && (
                  <div className="mt-auto pt-6">
                    <ReferralCtaButton
                      location={`step-${step.number}`}
                      variant="dark"
                      className="px-5 py-2.5 text-sm"
                    >
                      {step.cta}
                    </ReferralCtaButton>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="text-base md:text-lg text-[#2A2A2A]">
            You can make up to {campaign.maxReferrals} successful referrals and
            earn up to {formatMoney(campaign, campaign.maxEarnings)}.
          </p>
          <ReferralCtaButton location="how-it-works" className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
