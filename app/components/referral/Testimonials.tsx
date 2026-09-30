"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReferralTestimonial } from "@/utils/contents/referral";

export default function Testimonials({
  testimonials,
}: {
  testimonials: ReferralTestimonial[];
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;

    const step = card.offsetWidth + 16;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    const atStart = track.scrollLeft <= 8;

    if (direction === 1 && atEnd)
      track.scrollTo({ left: 0, behavior: "smooth" });
    else if (direction === -1 && atStart)
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    else track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  // Gentle auto-roll; stops while the visitor is interacting and for
  // anyone who prefers reduced motion.
  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => scrollByCard(1), 4500);
    return () => clearInterval(id);
  }, [paused, testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-[#09253F] text-white overflow-hidden">
      <div className="mx-auto max-w-336 px-4 md:px-12 py-20 md:py-28 font-famil">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em]">
              People are making money on Payva.
            </h2>
            <p className="mt-3 text-lg text-white/70">
              Real Payva users. Real referrals. Real rewards.
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scrollByCard(dir)}
                aria-label={
                  dir === 1 ? "Next testimonial" : "Previous testimonial"
                }
                className="size-12 rounded-full border border-white/25 grid place-items-center hover:bg-white/10 transition-colors"
              >
                {dir === 1 ? <ChevronRight /> : <ChevronLeft />}
              </button>
            ))}
          </div>
        </div>

        <ul
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="mt-12 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {testimonials.map((t) => (
            <li
              key={`${t.firstName}-${t.quote.slice(0, 12)}`}
              className="snap-start shrink-0 w-[82%] sm:w-[48%] lg:w-[calc((100%-2rem)/3)] rounded-3xl bg-white/6 border border-white/10 p-6 md:p-8 flex flex-col"
            >
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-8 flex items-center gap-4">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={t.firstName}
                    width={56}
                    height={56}
                    className="size-14 rounded-full object-cover"
                  />
                ) : (
                  <span className="size-14 rounded-full bg-[#006D68] grid place-items-center text-xl font-bold">
                    {t.firstName[0]}
                  </span>
                )}
                <div className="flex-1">
                  <p className="font-bold">{t.firstName}</p>
                  {t.location && (
                    <p className="text-sm text-white/60">{t.location}</p>
                  )}
                </div>
                {t.reward && (
                  <span className="rounded-full bg-[#66D2CD] text-[#09253F] px-3 py-1 text-sm font-bold">
                    {t.reward}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
