"use client";

import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  fadeInLeft,
  fadeInRight,
} from "@/utils/lib/variants";

const OurLens = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <motion.div
        className="px-4 md:px-12 pt-24 pb-32 flex flex-col max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div variants={itemVariants}>
          <HeadingTag>Our Lens</HeadingTag>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col md:flex-row gap-6 justify-between"
          variants={containerVariants}
        >
          {/* Image */}
          <motion.div className="w-full md:w-1/2" variants={fadeInLeft}>
            <Image
              src="/assets/about/about-1.png"
              alt="Our Lens"
              width={700}
              height={420}
              className="w-full object-contain rounded-xl"
            />
          </motion.div>

          {/* Vision + Mission */}
          <motion.div
            className="flex font-famil flex-col gap-6 flex-1"
            variants={fadeInRight}
          >
            {/* Vision */}
            <motion.div
              className="bg-[#EBF2F6] p-8 rounded-xl"
              variants={itemVariants}
            >
              <h2 className="text-3xl text-[#2A2A2A] font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-[#4D4D4D] text-base">
                To make international payments feel local, helping people
                support families and opportunities beyond borders.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-[#CCF0EE] p-8 rounded-xl flex-1"
              variants={itemVariants}
            >
              <h2 className="text-3xl text-[#2A2A2A] font-bold mb-4">
                Our Mission
              </h2>

              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.p
                  className="text-[#4D4D4D] text-base"
                  variants={itemVariants}
                >
                  To simplify cross-border payments with a fast, transparent,
                  and user-friendly experience. We&apos;re building a remittance
                  ecosystem that connects people across countries by offering:
                </motion.p>

                <motion.ul
                  className="list-disc pl-8 space-y-2"
                  variants={containerVariants}
                >
                  {[
                    "Secure and compliant transfers",
                    "Honest, upfront fees",
                    "Great rates",
                    "A smooth, intuitive experience",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-[#4D4D4D] text-base"
                      variants={itemVariants}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.p
                  className="text-[#4D4D4D] text-base"
                  variants={itemVariants}
                >
                  Our goal is to give individuals and families a safer, faster,
                  and more affordable way to move money—whether it&apos;s for
                  bills, school fees, or personal financial support without
                  delays, friction, or uncertainty.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurLens;
