"use client";

// import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { itemVariants, sectionVariants } from "@/utils/lib/variants";

/* ------------------ Animation Variants ------------------ */

// const sectionVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

/* ------------------ Component ------------------ */

const ValueProposition = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F9FFFE]">
      <motion.div
        className="px-5 md:px-4 py-20 md:py-32 space-y-16 max-w-7xl mx-auto font-famil"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* ---------------- Header ---------------- */}
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          {/* <HeadingTag className="w-fit font-famil">
            Our Value Proposition
          </HeadingTag> */}
          <h1 className="text-[#2A2A2A] font-famil text-xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-3xl">
            Sending Money Home Just Got Better with Payva
          </h1>
        </motion.div>

        {/* ---------------- Zero Transfer Fee ---------------- */}
        <motion.div
          className="bg-[#E6F9F7] rounded-3xl md:rounded-4xl flex flex-col md:flex-row items-center justify-between overflow-hidden"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-6 p-8 pt-12 md:p-18 max-w-2xl">
            {/* <span className="uppercase text-[#09253F] font-medium text-sm tracking-wide">
              Free Transfer
            </span> */}
            <h2 className="font-bold text-2xl md:text-3xl text-[#2A2A2A]">
              Zero Transfer Fee
            </h2>
            <p className="text-base md:text-xl text-[#4D4D4D]">
              Send money home or abroad with zero transfer fees. Supporting your
              loved ones shouldn&apos;t cost extra. What you send is exactly
              what they get.
            </p>
          </div>

          <motion.img
            src="/assets/zero-transfer.png"
            alt="zero transfer fee"
            className="w-110 h-auto -mb-20 lg:h-120 object-contain"
            animate={shouldReduceMotion ? {} : { y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* ---------------- Fast Transfers ---------------- */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          variants={itemVariants}
        >
          <Image
            src="/assets/man-1.png"
            width={1400}
            height={1200}
            alt="man making payment with payva"
            className="hidden lg:block object-cover md:w-120 h-72 md:h-145 w-full rounded-3xl md:rounded-4xl"
          />

          <div className="w-full bg-[#EBF2F6] rounded-3xl md:rounded-4xl overflow-hidden h-145 relative">
            <div className="flex flex-col gap-6 p-8 pt-12 md:p-16 max-w-xl">
              {/* <span className="uppercase text-[#09253F] font-medium text-sm tracking-wide">
                Fast Transfers
              </span> */}
              <h2 className="font-bold text-2xl md:text-3xl text-[#2A2A2A]">
                Fast Transfers, Wherever You Are
              </h2>
              <p className="text-base md:text-xl text-[#4D4D4D]">
                Enjoy fast and reliable transfers every single time, so your
                loved ones don&apos;t have to wait hours or days before
                receiving your transfers.
              </p>
            </div>

            <motion.img
              src="/assets/globe.png"
              alt="globe"
              className="absolute w-100 md:w-140 -bottom-32 -right-20"
              animate={
                shouldReduceMotion
                  ? {}
                  : { y: [0, -12, 0], rotate: [-1, 1, -1] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* ---------------- Great Rates ---------------- */}
        <motion.div
          className="bg-[#FFFBEB] rounded-3xl md:rounded-4xl flex flex-col md:flex-row items-start justify-between overflow-hidden"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-6 p-8 pt-12 md:p-16 max-w-xl">
            {/* <span className="uppercase text-[#09253F] font-medium text-sm tracking-wide">
              Great Rates
            </span> */}
            <h2 className="font-bold text-2xl md:text-3xl text-[#2A2A2A]">
              Real-Time Exchange Rates That Favour You
            </h2>
            <p className="text-base md:text-xl text-[#4D4D4D]">
              Get more out of every transfer. Our rates are fair, competitive
              with no hidden markups.
            </p>
          </div>

          <Image
            src="/assets/currency.png"
            alt="currency"
            width={500}
            height={500}
            className="w-80 lg:w-auto object-contain"
          />
        </motion.div>

        {/* ---------------- Multi-Currency ---------------- */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          variants={itemVariants}
        >
          <Image
            src="/assets/man-2.png"
            width={1400}
            height={1200}
            alt="man making payment with payva"
            className="hidden lg:block w-full md:w-[40%] h-72 md:h-auto object-cover rounded-3xl md:rounded-4xl"
          />

          <div className="w-full h-145 bg-[#ECFDF5] rounded-3xl md:rounded-4xl md:h-147 overflow-hidden relative">
            <div className="flex flex-col gap-6 p-8 pt-12 md:p-16 max-w-xl">
              {/* <span className="uppercase text-[#09253F] font-medium text-sm tracking-wide">
                Multi-Currency Wallet
              </span> */}
              <h2 className="font-bold text-2xl md:text-3xl text-[#2A2A2A]">
                One App, Multiple Wallet, Multiple Currencies.
              </h2>
              <p className="text-base md:text-xl text-[#4D4D4D]">
                Every currency gets its own wallet, so your money stays
                organised and easy to manage wherever you are.
              </p>
            </div>

            <motion.img
              src="/assets/currency-2.png"
              alt="multi currency"
              className="md:block w-72.25 md:w-110 absolute right-0 -bottom-32 scale-110"
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ValueProposition;
