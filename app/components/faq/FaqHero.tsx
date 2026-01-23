"use client";

import { useState } from "react";
import Image from "next/image";
import FlipCountdown from "../Countdown";
import Button from "../commons/Button";
import WaitlistPopup from "../commons/WaitlistPopup";
import { motion } from "framer-motion";

const CompanyHero = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <WaitlistPopup
        open={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
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
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/kite-lines.svg"
              width={1500}
              height={1500}
              alt="kite lines"
              className="
                absolute
                right-52
                lg:right-0
                bottom-32
                w-[50%]
                lg:w-[60%]
                max-w-none
                translate-x-1/4
                translate-y-1/4
              "
            />
          </motion.div>
        </div>

        {/* CONTENT */}
        <div
          className="
          relative
          z-10
          px-6 lg:px-10
          pt-38 md:pt-48
          flex
          items-center
          text-center
          justify-between
          flex-col lg:flex-row
          text-white
          font-famil
        "
        >
          {/* LEFT */}
          <motion.div
            className="
            flex
            flex-col
            gap-5
            text-center lg:text-start
            items-center lg:items-start
            max-w-3xl
          "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="
              text-3xl md:text-5xl
              text-[#E6F9F7]
              leading-[120%] md:leading-[100%]
              tracking-[-2%]
              font-bold
            "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Got Questions?
              <br />
              <span className="text-[#66D2CD] italic">
                We&apos;ve Got Answers
              </span>
            </motion.h1>

            <motion.p
              className="
              text-sm md:text-xl
              md:leading-8
              text-white
              max-w-2xl
              px-4 md:px-0
            "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Get answers to frequently asked questions or reach out to
              support—we&apos;re here to help you send, receive, and manage your
              money seamlessly across borders.
            </motion.p>

            {/* CTA GROUP */}
            <motion.div
              className="max-w-md w-full mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <span className="text-[#C5D4E0] text-sm md:text-base block pb-4">
                Be the first to know when the Payva app is live.
              </span>

              <div className="mx-0 lg:ml-8 lg:text-start">
                <FlipCountdown launchDate="2026-02-14T00:00:00" />
              </div>

              <motion.div
                className="
                flex
                items-center
                justify-center lg:justify-start
                mx-4 md:mx-0
                bg-transparent
                p-0.5
                rounded-lg
                mt-5
                gap-2
              "
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <Button
                  className="text-sm md:text-base shrink-0 md:px-10 md:py-5"
                  onClick={() => setShowWaitlist(true)}
                >
                  Join the waitlist
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="
            relative
            z-10
            mt-12 md:mt-0
            -bottom-10
            lg:-bottom-28
          "
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/assets/woman-2.webp"
              alt="Payva Mobile Payment"
              height={1200}
              width={1000}
              className="
              w-full
              scale-140 sm:scale-110 md:scale-120 lg:scale-160
            "
              priority
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CompanyHero;
