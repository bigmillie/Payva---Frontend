import Image from "next/image";
import Link from "next/link";
import { maxEarnings, referralCampaign } from "@/utils/contents/referral";
import { appStoreLink, playStoreLink } from "@/utils/routes";
import { ReferralCtaButton } from "./ReferralCta";

export default function FinalCta() {
  return (
    <section className="px-2 md:px-12 pt-12 md:pt-16 pb-12">
      <div className="mx-auto max-w-336 rounded-4xl bg-[#66D2CD] text-[#09253F] px-6 md:px-16 py-16 md:py-24 font-famil text-center flex flex-col items-center">
        <h2 className="max-w-4xl text-4xl md:text-7xl font-bold leading-[0.98] tracking-[-0.03em]">
          Make money with your friends on Payva
        </h2>
        <p className="mt-5 text-lg md:text-2xl">
          You just have to send the link.
        </p>

        <ReferralCtaButton
          location="final"
          variant="dark"
          className="mt-8 text-base md:text-lg px-10 py-4"
        />

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.12em]">
          Available on the Payva app
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href={appStoreLink} target="_blank">
            <Image
              src="/apple-store.png"
              width={160}
              height={48}
              alt="Download on the App Store"
            />
          </Link>
          <Link href={playStoreLink} target="_blank">
            <Image
              src="/google-play.png"
              width={160}
              height={48}
              alt="Get it on Google Play"
            />
          </Link>
        </div>

        <p className="mt-8 text-sm text-[#09253F]/75">
          Up to {referralCampaign.maxReferrals} successful referrals. Up to $
          {maxEarnings}. Limited-time campaign.
        </p>
      </div>
    </section>
  );
}
