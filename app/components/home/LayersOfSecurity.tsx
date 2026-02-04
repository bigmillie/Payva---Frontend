"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LayersOfSecurity = () => {
  return (
    <section
      className="
        bg-[linear-gradient(116.28deg,#004F4C_0%,#141B34_131.82%)]
        mx-0 md:mx-12
        rounded-none md:rounded-4xl
        mb-12
        font-famil
      "
    >
      <motion.div
        className="p-6 md:p-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="flex flex-col mb-14" variants={headerVariants}>
          <h1 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-3xl">
            Layers of Security You Can Rely On
          </h1>
        </motion.div>

        {/* Values List */}
        <motion.div
          className="
            grid
            grid-cols-1 sm:grid-cols-2
            gap-6 md:gap-8
            w-full
          "
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="bg-[#E6F9F7] p-6 md:p-16 rounded-xl shadow-lg"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-[#2A2A2A]">
              Account Security That Puts You in Control
            </h2>
            <p className="text-sm md:text-[20px] text-[#4D4D4D]">
              Use your <span className="text-[#008984]">PIN</span> to approve
              every payment, and sign in with{" "}
              <span className="text-[#008984]">
                Face ID or your fingerprint.
              </span>{" "}
              It keeps your account secure and makes access quick and easy.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="bg-[#E6F9F7] p-6 md:p-16 rounded-xl shadow-lg"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-[#2A2A2A]">
              Your Data, Fully Protected
            </h2>
            <p className="text-sm md:text-[20px] text-[#4D4D4D]">
              Your{" "}
              <span className="text-[#008984]">
                personal data stays encrypted and protected.
              </span>{" "}
              We never share it without your permission.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="bg-[#E6F9F7] p-6 md:p-16 rounded-xl shadow-lg"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-[#2A2A2A]">
              Strict Privacy Standards
            </h2>
            <p className="text-sm md:text-[20px] text-[#4D4D4D]">
              We comply with{" "}
              <span className="text-[#008984]">
                Anti-Money Laundering (AML)/Know Your Customer (KYC) global
                standards
              </span>{" "}
              to ensure secure payments.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            className="bg-[#E6F9F7] p-6 md:p-16 rounded-xl shadow-lg"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-[#2A2A2A]">
              Fully Regulated and Compliant
            </h2>
            <p className="text-sm md:text-[20px] text-[#4D4D4D]">
              Your money deserves real protection. That&apos;s why we operate
              under{" "}
              <span className="text-[#008984]">FINTRAC, AML/ATF, and RPAA</span>{" "}
              guidelines to safeguard every transaction.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LayersOfSecurity;
