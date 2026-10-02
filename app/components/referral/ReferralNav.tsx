"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../commons/Logo";
import { ReferralCtaButton } from "./ReferralCta";
import { referralPage } from "@/utils/routes";
import type { ReferralRegion } from "@/utils/contents/referral";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
];

const regionOptions: { region: ReferralRegion; label: string; flag: string }[] =
  [
    { region: "ca", label: "Canada", flag: "/canada.png" },
    { region: "uk", label: "UK", flag: "/british.png" },
  ];

export default function ReferralNav({ region }: { region: ReferralRegion }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#09253F]/90 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
          : "bg-[#09253F]"
      }`}
    >
      <nav className="mx-auto max-w-336 flex items-center justify-between gap-3 px-4 md:px-12 h-18 md:h-20 font-famil">
        <Logo type="primary" />

        <div className="flex items-center gap-3 md:gap-8">
          <ul className="hidden lg:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-semibold text-white/70 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Country switcher — each country has its own page */}
          <div
            role="group"
            aria-label="Choose your country"
            className="flex rounded-full bg-white/10 p-1"
          >
            {regionOptions.map((option) => {
              const active = option.region === region;
              return (
                <Link
                  key={option.region}
                  href={`${referralPage}/${option.region}`}
                  aria-current={active ? "page" : undefined}
                  aria-label={option.label}
                  className={`flex items-center gap-1.5 rounded-full px-2 md:px-3 py-1.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-white text-[#09253F]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <Image
                    src={option.flag}
                    alt=""
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="hidden sm:inline">{option.label}</span>
                </Link>
              );
            })}
          </div>

          <ReferralCtaButton
            location="nav"
            variant="light"
            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base whitespace-nowrap"
          />
        </div>
      </nav>
    </header>
  );
}
