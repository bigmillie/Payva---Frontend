"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";
import { X } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import Image from "next/image";
import WaitlistPopup from "./WaitlistPopup";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Company", href: "/company" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const { currency, setCurrency, currencies } = useCurrency();
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const isActive = (href: string) => pathname === href;

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (viewport height)
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100); // -100 for smooth transition
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
    w-full z-50 transition-all duration-300 ease-in-out
    ${
      isScrolled
        ? "fixed top-0 bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)]"
        : "absolute top-10"
    }
  `}
      >
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-360">
          <nav
            className={`
          py-4 px-6 lg:px-12
          bg-[#E6F9F74D]
          border border-[#f3f3f3]
          flex items-center justify-between
          backdrop-blur-md
          md:h-20
          transition-all duration-300 ease-in-out
          ${isScrolled ? "mx-0 rounded-none border-0 bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)]" : "mx-6 lg:mx-10 rounded-[36px] shadow-[10.78px_10.78px_9.7px_1.8px_rgba(0,0,0,0.16)]"}
        `}
          >
            {/* Logo */}
            <Logo type="primary" />

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-12">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`
                font-semibold transition-colors
                ${
                  isActive(href)
                    ? "text-[#66D2CD]"
                    : "text-white/70 hover:text-white"
                }
              `}
                >
                  {label}
                </Link>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="space-x-3 flex font-famil">
              <div className="flex items-center justify-between">
                {/* Currency Selector */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setShowCurrencyDropdown(!showCurrencyDropdown)
                    }
                    className="flex items-center gap-2 bg-white px-1 md:px-4 py-1 rounded-xl border border-[#082C42] transition-shadow"
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                      {/* <span className="text-5xl"></span> */}
                      <Image
                        src={currency.flag}
                        alt={currency.name}
                        width={80}
                        height={80}
                      />
                    </div>
                    <span className="font-semibold text-[#4D4D4D]">
                      {currency.code}
                    </span>
                    <svg
                      className="w-5 h-5 text-[#2A2A2A]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {showCurrencyDropdown && (
                    <div className="absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 w-40">
                      {currencies.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => {
                            setCurrency(c.code);
                            setShowCurrencyDropdown(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-3xl"
                        >
                          <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                            {/* <span className="text-5xl">{c.flag}</span> */}
                            <Image
                              src={c.flag}
                              alt={c.name}
                              width={80}
                              height={80}
                            />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold">{c.code}</div>
                            <div className="text-xs text-gray-500">
                              {c.name}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="hidden md:inline-block">
                <Button
                  className="text-sm lg:text-base"
                  onClick={() => setShowWaitlist(true)}
                >
                  Join the waitlist
                </Button>
              </div>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden text-[#99E1DD] font-famil"
                aria-label="Toggle menu"
              >
                {open ? (
                  <X size={28} />
                ) : (
                  <Image
                    src="/assets/menu-icon.svg"
                    alt="Menu"
                    width={32}
                    height={32}
                  />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {open && (
            <div
              className="
            md:hidden
            mt-4 mx-6
            bg-[#0B2B2F]
            border border-[#1f3d42]
            rounded-2xl
            shadow-xl
            p-6
            space-y-6
            font-famil
            z-40
          "
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`
                  font-semibold transition-colors
                  ${
                    isActive(href)
                      ? "text-[#66D2CD]"
                      : "text-white/70 hover:text-white"
                  }
                `}
                  >
                    {label}
                  </Link>
                ))}
              </ul>

              <Button
                href="#waitlist"
                onClick={() => {
                  setShowWaitlist(true);
                  setOpen(false);
                }}
                className="w-full justify-center"
              >
                join the waitlist
              </Button>
            </div>
          )}
        </div>
      </header>

      <WaitlistPopup
        open={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </>
  );
};

export default Header;
