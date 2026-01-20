"use client";

import { useState } from "react";
import CurrencyConverter from "../CurrencyConverter";
import Image from "next/image";
import FlipCountdown from "../Countdown";
import Button from "../commons/Button";
import WaitlistPopup from "../commons/WaitlistPopup";

const HomeHero = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  // const [email, setEmail] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = async () => {
  //   if (!email) return;

  //   setIsSubmitting(true);
  //   setSubmitted(false);

  //   // ⏳ Simulate API request
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  //   setIsSubmitting(false);
  //   setSubmitted(true);
  //   setEmail("");

  //   // Optional: hide success message after a while
  //   setTimeout(() => setSubmitted(false), 4000);
  // };

  return (
    <>
      <WaitlistPopup
        open={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
      <section
        className="
        pb-20
        relative
        overflow-hidden
        bg-[url('/grid-lines.svg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
        bg-no-repeat
        bg-contain
        bg-center
      "
      >
        <div
          className="
          px-6 md:px-16
          pt-44 md:pt-52
          flex
          flex-col gap-12 lg:flex-row
          items-center lg:items-start
          justify-between
          text-white
        "
        >
          {/* LEFT SIDE */}
          <div
            className="
            flex flex-col
            gap-5 md:gap-6
            text-center lg:text-start
            items-center lg:items-start
            max-w-md md:max-w-3xl
            w-full
          "
          >
            <h1
              className="
              text-3xl md:text-6xl
              text-[#E6F9F7]
              leading-[120%] md:leading-[100%]
              tracking-[-2%]
              font-bold
            "
            >
              Move Your Money as{" "}
              <span className="text-[#66D2CD] italic">Easily</span> as You Want
            </h1>

            <p
              className="
              text-sm md:text-xl
              leading-6 md:leading-8
              text-white
              tracking-normal
              max-w-full md:max-w-2xl
            "
            >
              From sending and receiving to paying bills and handling tuition,
              Payva brings your essentials together so you can move money with
              speed and ease.
            </p>

            <div className="max-w-md w-full mx-auto md:mx-0">
              <span className="text-[#C5D4E0] text-sm md:text-base block pb-4">
                Be the first to know when the Payva app is live.
              </span>

              <div className="mx-0 -ml-2.5 md:ml-0 lg:ml-8 lg:text-start">
                <FlipCountdown launchDate="2026-02-14T00:00:00" />
              </div>

              <div
                className="
                flex
                items-center
                mx-4 md:mx-0
                bg-transparent
                p-0.5
                rounded-lg
                mt-5
                gap-2
              "
              >
                {/* <input
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
                /> */}

                <Button
                  className="text-sm shrink-0 px-5"
                  onClick={() => setShowWaitlist(true)}
                >
                  Join the waitlist
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full mt-10 md:mt-0 flex justify-center md:justify-end">
            {/* Kite lines (DECORATION) */}
            <Image
              src="/kite-lines.svg"
              width={1500}
              height={1500}
              alt="kite lines"
              className="
              absolute
              z-10
              -bottom-24
              -right-24
              w-[90%] lg:w-[140%]
              max-w-none
              opacity-80
              pointer-events-none
            "
            />

            {/* Currency Converter */}
            <div className="relative z-20 w-full lg:max-w-lg">
              <CurrencyConverter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
