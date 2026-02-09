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
        bg-[url('/grid-lines.sg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
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
                right-0
                bottom-32
                w-[60%]
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
          px-6 md:px-16
          pt-40 pb-10 md:pt-52
          flex
          items-center
          justify-between
          flex-col md:flex-row
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
            text-center md:text-start
            items-center md:items-start
            md:max-w-2.5xl
          "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="
              text-xl md:text-5xl
              text-[#E6F9F7]
              leading-[120%] md:leading-[100%]
              tracking-[-2%]
              font-bold
            "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              You Deserve a Smooth Way to Send and Receive Love{" "}
              <span className="text-[#66D2CD] italic">Across Borders</span>
            </motion.h1>

            <motion.p
              className="
              text-sm md:text-xl
              md:leading-8
              text-white
              max-w-2xl
            "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Thousands of Nigerians move abroad yearly. What better way to stay
              close to home than to provide a secure, transparent, and
              affordable way to support the people who count on them?
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
                <FlipCountdown launchDate="2026-03-14T00:00:00" />
              </div>

              <motion.div
                className="
                flex
                items-center
                justify-center md:justify-start
                mx-4 md:mx-0
                bg-transparent
                p-0.5
                rounded-lg
                mt-5
                mb-10
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
            z-20
            mt-20 md:mt-0
            -bottom-10
          "
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/assets/woman-1.webp"
              alt="Payva Mobile Payment"
              height={1200}
              width={900}
              className="
              w-full
              scale-190 md:scale-200
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
