"use client";

import { useState } from "react";
import Image from "next/image";
import FlipCountdown from "../Countdown";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <>
      <section
        className="
        relative
        overflow-hidden
        bg-[url('/grid-lines.sg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
        bg-no-repeat
        bg-contain
        bg-center
        mb-10
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
              width={1000}
              height={1000}
              alt="kite lines"
              className="
                absolute
                right-0
                bottom-32
                w-[30%]
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
          px-6 md:px-20
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
              Payva Blog: Deep Insights on{" "}
              <span className="text-[#66D2CD] italic">Global Payments</span>
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
              Learn how to move money smarter across borders with detailed
              guides, fintech strategy breakdowns, compliance explainers, and
              practical remittance knowledge.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogHero;
