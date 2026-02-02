"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CurrencyConverter from "../CurrencyConverter";
import Image from "next/image";
import FlipCountdown from "../Countdown";
import Button from "../commons/Button";
import WaitlistPopup from "../commons/WaitlistPopup";
import {
  sectionVariants,
  containerVariants,
  fadeInUp,
  imageVariants,
  cardVariants,
} from "@/utils/lib/variants";

const HomeHero = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

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
          bg-[url('/grid-lines.sg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
          bg-no-repeat
          bg-contain
          bg-center
        "
      >
        <motion.div
          className="
            px-6 md:px-16
            pt-44 md:pt-52
            flex
            flex-col gap-12 lg:flex-row
            items-center lg:items-start
            justify-between
            text-white
          "
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT SIDE */}
          <motion.div
            className="
              flex flex-col
              gap-5 md:gap-6
              text-center lg:text-start
              items-center lg:items-start
              max-w-md md:max-w-3xl
              w-full
            "
            variants={containerVariants}
          >
            <motion.h1
              variants={fadeInUp}
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
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="
                text-sm md:text-xl
                leading-6 md:leading-8
                text-white
                tracking-normal
                max-w-full md:max-w-2xl
              "
            >
              Make fast cross-border payments with ease. Send and receive funds,
              pay bills in Nigeria and tuition fees abroad—all on the go with
              the Payva app.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="max-w-md w-full mx-auto md:mx-0"
            >
              <span className="text-[#C5D4E0] text-sm md:text-base block pb-4">
                Be the first to know when the Payva app is live.
              </span>

              <div className="mx-0 -ml-2.5 md:ml-0 lg:ml-8 lg:text-start">
                <FlipCountdown launchDate="2026-02-14T00:00:00" />
              </div>

              <motion.div
                variants={cardVariants}
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

          {/* RIGHT SIDE */}
          <motion.div
            variants={containerVariants}
            className="relative w-full mt-10 md:mt-0 flex justify-center md:justify-end"
          >
            {/* Kite lines (DECORATION) */}
            <motion.div variants={imageVariants}>
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
            </motion.div>

            {/* Currency Converter */}
            <motion.div
              variants={imageVariants}
              className="relative z-20 w-full lg:max-w-lg"
            >
              <CurrencyConverter />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HomeHero;
