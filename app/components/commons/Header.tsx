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
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const { currency, setCurrency, currencies } = useCurrency();
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const isActive = (href: string) => pathname === href;

  // 🔥 SMART APP REDIRECT
  const handleAppRedirect = () => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent;

    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /android/i.test(ua);

    const deepLink = "payva://home";

    const params = new URLSearchParams({
      utm_source: "website",
      utm_medium: "header_cta",
      utm_campaign: "app_download",
    });

    const androidStore =
      "https://play.google.com/store/apps/details?id=com.paymentpayva.payva&" +
      params.toString();

    const iosStore =
      "https://apps.apple.com/ng/app/payva-payment/id6755332619?" +
      params.toString();

    const fallback = isIOS ? iosStore : androidStore;

    const timeout = setTimeout(() => {
      window.location.href = fallback;
    }, 1500);

    window.location.href = deepLink;

    window.addEventListener("blur", () => {
      clearTimeout(timeout);
    });
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100);
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
        <div className="mx-auto w-full max-w-336 2xl:max-w-360">
          <nav
            className={`
            py-4 px-6 lg:px-12
            bg-[#E6F9F74D]
            border border-[#f3f3f3]
            flex items-center justify-between
            backdrop-blur-md
            md:h-20
            transition-all duration-300 ease-in-out
            ${
              isScrolled
                ? "mx-0 rounded-none border-0 bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)]"
                : " rounded-[36px] shadow-[10.78px_10.78px_9.7px_1.8px_rgba(0,0,0,0.16)]"
            }
          `}
          >
            <Logo type="primary" />

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-12">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`font-semibold transition-colors ${
                    isActive(href)
                      ? "text-[#66D2CD]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </ul>

            {/* CTA + Currency */}
            <div className="space-x-3 flex items-center font-famil">
              {/* Currency */}
              <div className="relative">
                <button
                  onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                  className="flex items-center gap-2 bg-white px-1 md:px-4 py-1 rounded-xl border border-[#082C42]"
                >
                  <Image
                    src={currency.flag}
                    alt={currency.name}
                    width={32}
                    height={32}
                  />
                  <span className="font-semibold text-[#4D4D4D]">
                    {currency.code}
                  </span>
                </button>

                {showCurrencyDropdown && (
                  <div className="absolute top-full mt-2 bg-white rounded-xl shadow-xl border w-40 z-50">
                    {currencies.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => {
                          setCurrency(c.code);
                          setShowCurrencyDropdown(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                      >
                        <Image
                          src={c.flag}
                          alt={c.name}
                          width={24}
                          height={24}
                        />
                        <div>
                          <div className="font-semibold">{c.code}</div>
                          <div className="text-xs text-gray-500">{c.name}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 🚀 UPDATED CTA */}
              <div className="hidden md:inline-block">
                <Button
                  className="text-sm lg:text-base"
                  onClick={handleAppRedirect}
                >
                  Get Payva App
                </Button>
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden text-[#99E1DD]"
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
            <div className="md:hidden mt-4 mx-6 bg-[#0B2B2F] rounded-2xl p-6 space-y-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </ul>

              <Button
                onClick={() => {
                  handleAppRedirect();
                  setOpen(false);
                }}
                className="w-full justify-center"
              >
                Get Payva App
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
