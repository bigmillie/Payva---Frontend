"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { appStoreLink, playStoreLink } from "@/utils/routes";
import { trackEvent } from "@/utils/lib/analytics";

type Platform = "ios" | "android" | "desktop";

const ReferralCtaContext = createContext<(location: string) => void>(() => {});

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/android/i.test(ua)) return "android";
  return "desktop";
}

export function ReferralCtaProvider({
  campaignName,
  appReferralLink,
  children,
}: {
  campaignName: string;
  appReferralLink: string | null;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [platform, setPlatform] = useState<Platform>("desktop");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const openCta = (location: string) => {
    const platform = detectPlatform();
    setPlatform(platform);
    trackEvent("referral_cta_click", {
      location,
      platform,
      campaign: campaignName,
    });

    // On phones, the universal link opens the app's Referral Hub; without
    // the app installed, go.payvapayment.com handles the fallback.
    if (appReferralLink && platform !== "desktop") {
      window.location.href = appReferralLink;
      return;
    }
    setOpen(true);
  };

  const storeBadges = [
    {
      platform: "ios",
      href: appStoreLink,
      src: "/apple-store.png",
      alt: "Download on the App Store",
    },
    {
      platform: "android",
      href: playStoreLink,
      src: "/google-play.png",
      alt: "Get it on Google Play",
    },
  ].filter((b) => platform === "desktop" || b.platform === platform);

  return (
    <ReferralCtaContext.Provider value={openCta}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-100 flex items-end md:items-center justify-center bg-[#09253F]/70 backdrop-blur-sm p-0 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="referral-cta-title"
              className="relative w-full md:max-w-lg bg-white rounded-t-3xl md:rounded-3xl p-6 md:p-10 font-famil"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-5 right-5 text-[#4D4D4D] hover:text-[#09253F]"
              >
                <X size={24} />
              </button>

              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#006D68]">
                {campaignName}
              </p>
              <h2
                id="referral-cta-title"
                className="mt-2 text-2xl md:text-3xl font-bold text-[#09253F] leading-tight"
              >
                Your referral link lives in the Payva app
              </h2>

              <ol className="mt-6 space-y-4">
                {[
                  "Open the Payva app and log in.",
                  "Tap the invite card on Home, or Profile → Referrals.",
                  "Copy your link and send it to your people.",
                ].map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-4 items-start text-[#2A2A2A]"
                  >
                    <span className="shrink-0 size-8 rounded-full bg-[#E6F9F7] text-[#006D68] font-bold grid place-items-center">
                      {i + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl bg-[#F4FFFE] p-5">
                <p className="font-semibold text-[#09253F]">
                  {platform === "desktop"
                    ? "Don't have the app yet?"
                    : "Don't have the app yet? Get it here, or open it if you do."}
                </p>
                <p className="mt-1 text-sm text-[#4D4D4D]">
                  Download Payva, sign up, and your link will be waiting under
                  Profile → Referrals.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {storeBadges.map((b) => (
                    <Link
                      key={b.platform}
                      href={b.href}
                      target="_blank"
                      onClick={() =>
                        trackEvent("referral_store_click", {
                          store: b.platform,
                        })
                      }
                    >
                      <Image src={b.src} width={150} height={45} alt={b.alt} />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReferralCtaContext.Provider>
  );
}

interface ReferralCtaButtonProps {
  location: string;
  children?: React.ReactNode;
  variant?: "primary" | "light" | "dark" | "ghost";
  className?: string;
}

const variants = {
  primary: "bg-[#006D68] text-white hover:bg-[#00524E]",
  light: "bg-[#66D2CD] text-[#09253F] hover:bg-[#99E1DD]",
  dark: "bg-[#09253F] text-white hover:bg-[#0F3556]",
  ghost: "border border-current hover:bg-white/10",
};

export function ReferralCtaButton({
  location,
  children = "Get my referral link",
  variant = "primary",
  className = "",
}: ReferralCtaButtonProps) {
  const openCta = useContext(ReferralCtaContext);

  return (
    <button
      type="button"
      onClick={() => openCta(location)}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
