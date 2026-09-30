"use client";

import { ArrowRight, BadgeCheck, Send, UserPlus } from "lucide-react";
import { useGetApp } from "../commons/GetApp";

// Sign-up to first transfer, laid out up front so visitors know how much
// friction there is before they can send. Step details mirror the app's
// verification checklist and recipient options.
const steps = [
  {
    icon: BadgeCheck,
    title: "Verify in minutes",
    body: "Sign up with your phone number, then confirm it's you with a photo ID and a quick selfie.",
  },
  {
    icon: UserPlus,
    title: "Add your recipient",
    body: "Any Nigerian bank account, or an Interac email for someone in Canada. Save them to send again in a tap.",
  },
  {
    icon: Send,
    title: "Send. Funds arrive in minutes",
    body: "Lock in the live rate with zero transfer fees, and follow your transfer in the app until it lands.",
  },
];

export default function HowItWorks() {
  const getApp = useGetApp();

  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white font-famil">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#006D68]">
              How it works
            </p>
            <h2 className="mt-2 text-2xl md:text-4xl font-bold text-[#2A2A2A]">
              From sign-up to your first transfer in three steps
            </h2>
          </div>
          <button
            type="button"
            onClick={() => getApp({ location: "how-it-works" })}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#006D68] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#00524E]"
          >
            Get started <ArrowRight size={18} />
          </button>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="relative rounded-3xl border border-[#E6F9F7] bg-[#F4FFFE] p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-[#006D68] text-white">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-bold tracking-[0.14em] text-[#006D68]">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#09253F]">{title}</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-[#4D4D4D]">
                {body}
              </p>
              {i < steps.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-1.5 text-[#006D68] shadow-md md:block"
                  size={32}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
