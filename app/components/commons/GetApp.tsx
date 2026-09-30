"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  appOpenLink,
  appSendMoneyLink,
  appStoreLink,
  playStoreLink,
} from "@/utils/routes";
import { trackEvent } from "@/utils/lib/analytics";

type Destination = "open" | "transfer";

const destinations: Record<
  Destination,
  { link: string; qr: string; title: string; body: string }
> = {
  open: {
    link: appOpenLink,
    qr: "/assets/qr/get-app.svg",
    title: "Get the Payva app on your phone",
    body: "Scan with your phone's camera to download Payva, or open it if you already have it.",
  },
  transfer: {
    link: appSendMoneyLink,
    qr: "/assets/qr/send-money.svg",
    title: "Continue on your phone",
    body: "Scan with your phone's camera to pick up where you left off in the Payva app. New to Payva? It takes you to the download.",
  },
};

interface GetAppOptions {
  location: string;
  destination?: Destination;
  detail?: string; // shown in the sheet, e.g. the amount from the calculator
  payload?: Record<string, string | number>;
}

const GetAppContext = createContext<(options: GetAppOptions) => void>(() => {});

export const useGetApp = () => useContext(GetAppContext);

const isMobile = () => /iPhone|iPad|iPod|android/i.test(navigator.userAgent);

export function GetAppProvider({ children }: { children: React.ReactNode }) {
  const [sheet, setSheet] = useState<GetAppOptions | null>(null);

  useEffect(() => {
    if (!sheet) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSheet(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sheet]);

  const getApp = (options: GetAppOptions) => {
    const destination = options.destination ?? "open";
    const mobile = isMobile();
    trackEvent("get_app_click", {
      location: options.location,
      destination,
      device: mobile ? "mobile" : "desktop",
      ...options.payload,
    });

    // Phones go straight to the app (or its download page); laptops get a
    // QR code so the visitor can hand off to their phone.
    if (mobile) {
      window.location.href = destinations[destination].link;
      return;
    }
    setSheet({ ...options, destination });
  };

  const content = sheet ? destinations[sheet.destination ?? "open"] : null;

  return (
    <GetAppContext.Provider value={getApp}>
      {children}

      <AnimatePresence>
        {sheet && content && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#09253F]/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSheet(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="get-app-title"
              className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center font-famil"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSheet(null)}
                aria-label="Close"
                className="absolute right-5 top-5 text-[#4D4D4D] hover:text-[#09253F]"
              >
                <X size={22} />
              </button>

              {sheet.detail && (
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#006D68]">
                  {sheet.detail}
                </p>
              )}
              <h2
                id="get-app-title"
                className="mt-2 text-2xl font-bold leading-tight text-[#09253F]"
              >
                {content.title}
              </h2>
              <p className="mt-2 text-sm text-[#4D4D4D]">{content.body}</p>

              <div className="mx-auto mt-6 w-52 rounded-2xl border border-[#E6F9F7] bg-white p-3 shadow-[0_8px_24px_rgba(8,44,66,0.08)]">
                <Image
                  src={content.qr}
                  alt="QR code to get the Payva app"
                  width={200}
                  height={200}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#4D4D4D]">
                Or download it directly
              </p>
              <div className="mt-3 flex justify-center gap-3">
                <Link href={appStoreLink} target="_blank">
                  <Image
                    src="/apple-store.png"
                    width={140}
                    height={42}
                    alt="Download on the App Store"
                  />
                </Link>
                <Link href={playStoreLink} target="_blank">
                  <Image
                    src="/google-play.png"
                    width={140}
                    height={42}
                    alt="Get it on Google Play"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </GetAppContext.Provider>
  );
}

/** Small "scan to get the app" tile to sit beside the store badges on
 * larger screens. Hidden on phones, where the badges work directly. */
export function AppQrTile({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div
      className={`hidden lg:flex shrink-0 self-center items-center gap-3 rounded-xl p-2 pr-4 ${
        tone === "dark" ? "bg-white/10 text-white" : "bg-white text-[#09253F]"
      }`}
    >
      <Image
        src="/assets/qr/get-app.svg"
        alt="QR code to get the Payva app"
        width={56}
        height={56}
        className="size-14 shrink-0 rounded-md bg-white p-0.5"
        unoptimized
      />
      <span className="text-xs font-semibold leading-tight">
        Scan to get
        <br />
        the app
      </span>
    </div>
  );
}
