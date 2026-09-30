import Image from "next/image";
import {
  ballerOfTheWeek,
  maxEarnings,
  sampleBaller,
} from "@/utils/contents/referral";
import { ReferralCtaButton } from "./ReferralCta";

const baller =
  ballerOfTheWeek ??
  (process.env.NODE_ENV === "production" ? null : sampleBaller);

export default function BallerOfTheWeek() {
  if (!baller) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-336 px-4 md:px-12 py-20 md:py-28 font-famil">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] text-[#09253F]">
            Baller of the Week
          </h2>
          <p className="mt-3 text-lg text-[#4D4D4D]">
            Every week, we&rsquo;re putting the spotlight on someone who knows
            how to make a connection.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-4xl bg-[#09253F] text-white md:grid-cols-2">
          <div className="relative aspect-4/5 md:aspect-auto md:min-h-130">
            <Image
              src={baller.photo}
              alt={baller.name}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 md:p-14">
            <span className="w-fit rounded-full bg-[#66D2CD] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#09253F]">
              Baller of the week
            </span>
            <p className="text-4xl md:text-6xl font-bold tracking-[-0.03em]">
              {baller.name}
            </p>
            <dl className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/8 p-5">
                <dt className="text-sm text-white/60">Successful referrals</dt>
                <dd className="mt-1 text-3xl md:text-4xl font-bold">
                  {baller.referrals}
                </dd>
              </div>
              <div className="rounded-2xl bg-white/8 p-5">
                <dt className="text-sm text-white/60">Earned</dt>
                <dd className="mt-1 text-3xl md:text-4xl font-bold text-[#66D2CD]">
                  ${baller.earned}
                </dd>
              </div>
            </dl>
            <blockquote className="text-lg md:text-xl leading-relaxed text-white/85 border-l-2 border-[#66D2CD] pl-5">
              &ldquo;{baller.quote}&rdquo;
            </blockquote>
            <ReferralCtaButton
              location="baller"
              variant="light"
              className="w-fit"
            >
              Get your own ${maxEarnings}
            </ReferralCtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
