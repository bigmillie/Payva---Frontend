"use client";

import {
  cardVariants,
  containerVariants,
  fadeInUp,
  sectionVariants,
} from "@/utils/lib/variants";
import { motion } from "framer-motion";
import Link from "next/link";

const MoreWays = () => {
  return (
    <section className="bg-[#FFFFFF] overflow-hidden">
      <motion.div
        className="px-4 md:px-12 pt-24 pb-32 max-w-3xl mx-auto font-famil flex flex-col gap-6 items-center justify-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-5xl text-[#01070D] font-bold leading-[100%] tracking-[-2%]"
        >
          More Ways to Reach Us
        </motion.h1>

        {/* Cards */}
        <motion.div
          className="mt-8 flex items-center justify-center w-fit"
          variants={containerVariants}
        >
          {/* Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-[#EBF2F6] p-8 md:p-12 rounded-xl flex flex-col items-center text-center justify-between"
          >
            <div>
              <h2 className="text-2xl md:text-3xl text-[#2A2A2A] font-bold mb-4">
                Email Us
              </h2>
              <p className="text-[#4D4D4D] text-lg">
                Prefer email? Drop us a message, and we&apos;ll get back to you
                as soon as possible:{" "}
                <Link
                  href="mailto:support@payvapayment.com"
                  className="text-[#006D68] font-bold"
                >
                  support@payvapayment.com
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Card */}
          {/* <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-[#EBF2F6] p-8 md:p-12 rounded-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl md:text-3xl text-[#2A2A2A] font-bold mb-4">
                Live 24/7 Chat
              </h2>
              <p className="text-[#4D4D4D] text-base">
                Have a question? Open the Payva app and start a chat with our
                support team at any time.{" "}
                <span className="font-bold text-[#006D68]">
                  We&apos;re ready to help, day or night.
                </span>
              </p>
            </div>
          </motion.div> */}

          {/* Card */}
          {/* <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-[#EBF2F6] p-8 md:p-12 rounded-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl md:text-3xl text-[#2A2A2A] font-bold mb-4">
                WhatsApp Support
              </h2>
              <p className="text-[#4D4D4D] text-base">
                Message us directly on WhatsApp for quick and fast answers:{" "}
                <Link
                  href="https://wa.me/+18254885474"
                  className="text-[#006D68] font-bold"
                >
                  +1-825-488-5474
                </Link>
              </p>
            </div>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MoreWays;
