"use client";

import { useEffect, useState } from "react";
import Logo from "../commons/Logo";
import { ReferralCtaButton } from "./ReferralCta";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
];

export default function ReferralNav() {
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
      <nav className="mx-auto max-w-336 flex items-center justify-between gap-4 px-4 md:px-12 h-18 md:h-20 font-famil">
        <Logo type="primary" />

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
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
          <ReferralCtaButton
            location="nav"
            variant="light"
            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base"
          />
        </div>
      </nav>
    </header>
  );
}
