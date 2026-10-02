"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageVariants } from "@/utils/lib/variants";
import { formatMoney, type ReferralCampaign } from "@/utils/contents/referral";
import { ReferralCtaButton } from "./ReferralCta";

export default function ReferralHero({
  campaign,
}: {
  campaign: ReferralCampaign;
}) {
  const reward = formatMoney(campaign, campaign.reward);
  const minTransfer = formatMoney(campaign, campaign.minTransfer);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#09253F_0%,#0B3A4A_55%,#006D68_130%)] text-white">
      <div className="mx-auto max-w-336 px-4 md:px-12 pt-10 md:pt-16 pb-16 md:pb-24 grid gap-10 lg:gap-16 lg:grid-cols-[1.05fr_1fr] items-center font-famil">
        {/* Rendered without an entrance animation so the headline and CTA
            are visible before JavaScript loads. */}
        <div className="flex flex-col gap-6 items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 pl-1.5 pr-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.14em]">
            <Image
              src={campaign.flag}
              alt=""
              width={22}
              height={22}
              className="rounded-full"
            />
            {campaign.name}
          </span>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-[-0.03em] text-[#E6F9F7]">
            Bring your people.{" "}
            <span className="block text-[#66D2CD] italic">Get rewarded.</span>
          </h1>

          <p className="max-w-xl text-base md:text-xl leading-relaxed text-white/85">
            Refer a friend to Payva. When they sign up and complete a qualifying{" "}
            {minTransfer}+ transfer, you both get {reward}.
          </p>

          <p className="text-sm font-semibold text-[#99E1DD]">
            Limited time{campaign.dates ? `: ${campaign.dates}` : " only"}
          </p>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <ReferralCtaButton
                location="hero"
                variant="light"
                className="text-base md:text-lg px-8 py-4"
              />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                How it works
              </a>
            </div>
            <p className="text-sm text-white/65">
              Up to {campaign.maxReferrals} successful referrals. Up to{" "}
              {formatMoney(campaign, campaign.maxEarnings)}.
            </p>
          </div>
        </div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="relative aspect-4/5 sm:aspect-4/3 lg:aspect-4/5 overflow-hidden rounded-4xl">
            <Image
              src={campaign.heroImage}
              alt={campaign.heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-5 left-4 md:-left-6 rounded-2xl bg-white text-[#09253F] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#006D68]">
              You + your friend
            </p>
            <p className="text-3xl font-bold leading-tight">
              {reward} <span className="text-[#66D2CD]">+</span> {reward}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
