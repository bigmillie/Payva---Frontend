"use client";

import { useState } from "react";
import Image from "next/image";
import FlipCountdown from "../Countdown";
import Button from "../commons/Button";
import { toast } from "sonner";

const CompanyHero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // name is optional
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to join waitlist");

      toast.success("You’re on the waitlist!"); // ✅ Sonner toast
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again."); // ✅ Error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[url('/grid-lines.svg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
        bg-no-repeat
        bg-contain
        bg-center
      "
    >
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/kite-lines.svg"
          width={1500}
          height={1500}
          alt="kite lines"
          className="
            absolute
            right-0
            bottom-32
            w-[60%]
            max-w-none
            opacity-90
            translate-x-1/4
            translate-y-1/4
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          px-6 md:px-16
          pt-44 md:pt-68
          flex
          items-center
          justify-between
          flex-col md:flex-row
          text-white
          font-famil
        "
      >
        {/* LEFT */}
        <div
          className="
            flex
            flex-col
            gap-5
            text-center md:text-start
            items-center md:items-start
            md:max-w-2.5xl
          "
        >
          <h1
            className="
              text-xl md:text-5xl
              text-[#E6F9F7]
              leading-[120%] md:leading-[100%]
              tracking-[-2%]
              font-bold
            "
          >
            You Deserve a Smooth Way to Send and Receive Love{" "}
            <span className="text-[#66D2CD] italic">Across Borders</span>
          </h1>

          <p
            className="
              text-sm md:text-xl
              md:leading-8
              text-white
              max-w-2xl
            "
          >
            Thousands of Nigerians move abroad yearly. What better way to stay
            close to home than to provide a secure, transparent, and affordable
            way to support the people who count on them?
          </p>

          {/* CTA GROUP */}
          <div className="max-w-md w-full mx-auto md:mx-0">
            <span className="text-[#C5D4E0] text-sm md:text-base block pb-4">
              Be the first to know when the Payva app is live.
            </span>

            <div className="mx-0 lg:ml-8 lg:text-start">
              <FlipCountdown launchDate="2026-02-14T00:00:00" />
            </div>

            <div
              className="
                flex
                items-center
                mx-4 md:mx-0
                bg-white
                p-0.5
                rounded-lg
                mt-5
                gap-2
              "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="
                  flex-1
                  px-4
                  py-3
                  outline-none
                  placeholder:text-slate-400
                  text-[#006D68]
                  rounded-md
                "
              />
              <Button
                className="text-sm shrink-0 px-5"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            relative
            z-20
            mt-20 md:mt-0
            -bottom-10
          "
        >
          <Image
            src="/assets/woman-1.webp"
            alt="Payva Mobile Payment"
            height={1200}
            width={900}
            className="
              w-full
              scale-140 md:scale-180
            "
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
