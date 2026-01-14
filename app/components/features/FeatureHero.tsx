"use client";
import Image from "next/image";
import FlipCountdown from "../Countdown";
import Button from "../commons/Button";
import { useState } from "react";

const FeatureHero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;

    setIsSubmitting(true);
    setSubmitted(false);

    // ⏳ Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
    setEmail("");

    // Optional: hide success message after a while
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[url('/grid-lines.svg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
        bg-no-repeat
        bg-cover
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
            lg:w-[65%]
            max-w-none
            opacity-90
            translate-x-1/4
            translate-y-1/4
          "
        />
      </div>

      {/* CONTENT */}
      <div className="z-10 px-6 lg:px-16 pt-48 flex items-center text-center flex-col lg:flex-row text-white">
        {/* LEFT */}
        <div className="flex flex-col text-center lg:items-start lg:text-start gap-5 lg:max-w-2.5xl font-famil">
          <h1 className="text-3xl lg:text-5xl text-[#E6F9F7] leading-[100%] tracking-[-2%] font-bold">
            Everything You Need for Cross-Border Payment in{" "}
            <span className="text-[#66D2CD] italic">One App</span>
          </h1>

          <p className="text-white text-sm md:text-xl md:leading-8 max-w-2xl">
            From sending and receiving to paying bills and handling tuition,
            Payva brings your essentials together so you can move money with
            speed and ease.
          </p>

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
                required
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
        <div className="relative z-20 mt-10 md:mt-0 -bottom-20 right-2">
          <Image
            src="/assets/phones.webp"
            alt="Payva Mobile Payment"
            height={1200}
            width={900}
            className="w-full scale-80 lg:scale-100"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
