"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";
import { X } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Company", href: "/company" },
  { label: "Faq", href: "/faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { currency, setCurrency, currencies } = useCurrency();
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="absolute top-10 w-full mx-auto z-50">
      <nav
        className="
          mx-6 lg:mx-10
          py-4 px-6 lg:px-12
          bg-[#E6F9F74D]
          shadow-[10.78px_10.78px_9.7px_1.8px_rgba(0,0,0,0.16)]
          border border-[#f3f3f3]
          rounded-4xl
          flex items-center justify-between
          backdrop-blur-md
          md:h-20
        "
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
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="flex items-center gap-2 bg-white px-1 md:px-4 py-1 rounded-xl border border-[#082C42] transition-shadow"
              >
                <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                  <span className="text-5xl">{currency.flag}</span>
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
                <div className="absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 w-64">
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
                        <span className="text-5xl">{c.flag}</span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{c.code}</div>
                        <div className="text-xs text-gray-500">{c.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:inline-block">
            <Button className="text-sm lg:text-base" href="#waitlist">
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
            onClick={() => setOpen(false)}
            className="w-full justify-center"
          >
            join the waitlist
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
