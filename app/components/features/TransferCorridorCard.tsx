"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Tag, TrendingUp, Zap } from "lucide-react";

type Code = "CAD" | "GBP" | "USD" | "NGN";

const currencies: Record<Code, { symbol: string; flag: string }> = {
  CAD: { symbol: "$", flag: "/canada.png" },
  GBP: { symbol: "£", flag: "/british.png" },
  USD: { symbol: "$", flag: "/usa.svg" },
  NGN: { symbol: "₦", flag: "/nigeria.png" },
};

// NGN per 1 unit of the foreign currency. `buy` applies when sending the
// foreign currency to NGN, `sell` when sending NGN out. CAD is replaced by
// the live rate from /api/rates; GBP and USD are example rates for this
// illustration — update them as needed.
const exampleRates: Record<
  Exclude<Code, "NGN">,
  { buy: number; sell: number }
> = {
  CAD: { buy: 1023, sell: 1035 },
  GBP: { buy: 1950, sell: 1985 },
  USD: { buy: 1420, sell: 1450 },
};

// The order the card cycles through, and the amount sent on each slide.
const corridors: { from: Code; to: Code; amount: number }[] = [
  { from: "CAD", to: "NGN", amount: 200 },
  { from: "GBP", to: "NGN", amount: 150 },
  { from: "NGN", to: "GBP", amount: 300000 },
  { from: "NGN", to: "CAD", amount: 200000 },
  { from: "USD", to: "NGN", amount: 150 },
  { from: "NGN", to: "USD", amount: 200000 },
];

const SLIDE_MS = 3000;

const money = (code: Code, value: number) =>
  `${code} ${currencies[code].symbol}${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const rateText = (n: number) =>
  n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

/** Animated stand-in for the "instant transfer" illustration: the transfer
 * card slides left-to-right through each corridor Payva supports. */
export default function TransferCorridorCard() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [rates, setRates] = useState(exampleRates);

  // Use the live CAD/NGN rate when the rates API has it.
  useEffect(() => {
    fetch("/api/rates", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((payload) => {
        const cad = payload?.data?.find(
          (r: { source: string; destination: string }) =>
            r.source === "CAD" && r.destination === "NGN",
        );
        if (cad?.buyingRate && cad?.sellingRate) {
          setRates((prev) => ({
            ...prev,
            CAD: { buy: cad.buyingRate, sell: cad.sellingRate },
          }));
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % corridors.length),
      SLIDE_MS,
    );
    return () => clearInterval(id);
  }, [paused]);

  const { from, to, amount } = corridors[index];
  const foreign = (from === "NGN" ? to : from) as Exclude<Code, "NGN">;
  const rate = rates[foreign];
  const received = from === "NGN" ? amount / rate.sell : amount * rate.buy;
  const rateLine = `1 ${foreign} = ${rateText(from === "NGN" ? rate.sell : rate.buy)} NGN`;

  return (
    <div
      className="relative w-full max-w-md aspect-square rounded-[36px] bg-[#F2F3F5] p-6 sm:p-8 flex flex-col justify-center font-famil"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Example transfers between Canada, the UK, the US and Nigeria"
    >
      {/* Paper plane flying off along a dashed path */}
      <svg
        aria-hidden
        viewBox="0 0 220 120"
        className="absolute right-4 top-4 w-40 sm:w-48"
      >
        <path
          d="M10 110 C 60 95, 70 60, 95 70 C 120 80, 100 40, 150 45"
          fill="none"
          stroke="#1F5E5B"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <path d="M150 20 L215 5 L175 70 L165 45 Z" fill="#2A9D95" />
        <path d="M165 45 L215 5 L155 38 Z" fill="#1F7A74" />
      </svg>

      <div className="relative mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_24px_48px_rgba(8,44,66,0.12)]">
        {/* Header, rate and fee change together as one slide */}
        <div key={index} className="corridor-slide-in">
          <div className="bg-[linear-gradient(100deg,#0B3F3D_0%,#1E6E6A_55%,#3A9C97_100%)] px-5 sm:px-6 py-5 text-white">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="flex flex-col items-center text-center">
                <span className="text-sm text-white/85">Send from</span>
                <Image
                  src={currencies[from].flag}
                  alt={from}
                  width={48}
                  height={48}
                  className="my-2 size-11 rounded-full object-cover ring-2 ring-white/70"
                />
                <span className="text-base sm:text-lg font-bold whitespace-nowrap">
                  {money(from, amount)}
                </span>
              </div>
              <span className="grid size-10 place-items-center rounded-full border-2 border-white/85">
                <ArrowRight size={20} />
              </span>
              <div className="flex flex-col items-center text-center">
                <span className="text-sm text-white/85">Send to</span>
                <Image
                  src={currencies[to].flag}
                  alt={to}
                  width={48}
                  height={48}
                  className="my-2 size-11 rounded-full object-cover ring-2 ring-white/70"
                />
                <span className="text-base sm:text-lg font-bold whitespace-nowrap">
                  {money(to, received)}
                </span>
              </div>
            </div>
          </div>

          {/* Receipt rows */}
          <div className="px-5 sm:px-6 py-2 text-[#2A2A2A]">
            <div className="flex items-center gap-3 border-b border-[#EEF0F2] py-3">
              <span className="grid size-8 place-items-center rounded-full bg-[#E6F9F7] text-[#006D68]">
                <TrendingUp size={16} />
              </span>
              <span className="flex-1 text-sm">Exchange rate</span>
              <span className="text-sm font-semibold">{rateLine}</span>
            </div>
            <div className="flex items-center gap-3 border-b border-[#EEF0F2] py-3">
              <span className="grid size-8 place-items-center rounded-full bg-[#E6F9F7] text-[#006D68]">
                <Tag size={16} />
              </span>
              <span className="flex-1 text-sm">Fee</span>
              <span className="text-sm font-semibold">
                {currencies[from].symbol}0.00
              </span>
            </div>
            <div className="py-3">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#E8F7EC] px-3 py-1.5 text-sm font-medium text-[#12A248]">
                <Zap size={15} /> Sent instantly
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Position dots */}
      <div className="mt-5 flex justify-center gap-1.5" aria-hidden>
        {corridors.map((c, i) => (
          <span
            key={`${c.from}-${c.to}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-[#006D68]" : "w-1.5 bg-[#C9D3D2]"
            }`}
          />
        ))}
      </div>
      <p className="mt-2 text-center text-[11px] text-[#808080]">
        Example amounts. See live rates in the app.
      </p>
    </div>
  );
}
