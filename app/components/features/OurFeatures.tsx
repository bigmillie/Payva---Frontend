"use client";

// import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";
import { ourFeatures } from "@/utils/contents";
// import Button from "../commons/Button";
import { useState } from "react";
import WaitlistPopup from "../commons/WaitlistPopup";
import { motion } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  itemVariants,
} from "@/utils/lib/variants";

const OurFeatures = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <section className="bg-[#FFFFFF]">
        <motion.div
          className="px-6 md:px-12 py-24 space-y-16 max-w-7xl mx-auto font-famil"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Section Heading */}
          <motion.div
            className="flex flex-col items-start gap-4"
            variants={itemVariants}
          >
            {/* <HeadingTag>Our Features</HeadingTag> */}
            <h1 className="text-[#4D4D4D] font-famil text-xl md:text-5xl font-bold leading-tight">
              One App for All Your Cross-Border Money Needs
            </h1>
          </motion.div>

          {/* Features */}
          <div className="space-y-24">
            {ourFeatures.map((feature, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={feature.title}
                  className={`flex flex-col md:flex-row items-center gap-16 ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                  // variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Image */}
                  <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    variants={imageVariants}
                  >
                    <Image
                      src={feature.imageUrl}
                      alt={feature.title}
                      width={520}
                      height={520}
                      className="w-full max-w-md object-contain"
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="w-full font-famil md:w-1/2 space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="flex items-center gap-3 flex-wrap"
                      variants={itemVariants}
                    >
                      <h2 className="text-3xl font-bold text-[#2A2A2A]">
                        {feature.title}
                      </h2>

                      {feature.tag && (
                        <span className="text-sm px-3 py-2 bg-[#0284C7] text-white rounded-xl">
                          {feature.tag}
                        </span>
                      )}
                    </motion.div>

                    <motion.p
                      className="text-[#4F4F4F] leading-relaxed"
                      variants={itemVariants}
                    >
                      {feature.description}
                    </motion.p>

                    <motion.ul
                      className="space-y-3"
                      variants={containerVariants}
                    >
                      {feature.points.map((point, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-[#4F4F4F]"
                          variants={itemVariants}
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-[#00C2A8]" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* <motion.div variants={itemVariants}>
                      <Button
                        onClick={() => setShowWaitlist(true)}
                        className="text-sm shrink-0 px-5"
                      >
                        Join the waitlist
                      </Button>
                    </motion.div> */}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <WaitlistPopup
        open={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </>
  );
};

export default OurFeatures;
