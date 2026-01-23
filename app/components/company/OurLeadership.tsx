"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";
import Button from "../commons/Button";
import WaitlistPopup from "../commons/WaitlistPopup";
import {
  cardVariants,
  containerVariants,
  fadeInUp,
} from "@/utils/lib/variants";

const OurLeadership = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <section className="bg-[#FFFFFF] overflow-hidden">
        <motion.div
          className="px-6 md:px-12 pt-24 pb-18 gap-10 flex items-start flex-col md:flex-row justify-between max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Heading */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-start gap-4 max-w-md"
          >
            {/* <HeadingTag>Our Leadership</HeadingTag> */}

            <h1 className="text-[#2A2A2A] font-famil text-3xl md:text-5xl font-bold leading-tight">
              Meet Some of Our Team Members
            </h1>

            <Button
              onClick={() => setShowWaitlist(true)}
              className="text-sm shrink-0 px-5"
            >
              Join the waitlist
            </Button>
          </motion.div>

          {/* Leadership Cards */}
          <motion.div
            className="flex flex-col items-center gap-6 md:flex-row"
            variants={containerVariants}
          >
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/assets/about/ceo1.jpeg"
                alt="Victor Ejome"
                width={400}
                height={200}
                className="w-80 h-80 rounded-xl object-cover"
              />
              <h3 className="text-xl font-bold mt-2">Victor Ejome</h3>
              <p className="text-gray-600">CEO / Founder</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/assets/about/ceo2.jpeg"
                alt="Great Ejome"
                width={400}
                height={200}
                className="w-80 h-80 rounded-xl object-cover"
              />
              <h3 className="text-xl font-bold mt-2">Great Ejome</h3>
              <p className="text-gray-600">CTO / Co-founder</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <WaitlistPopup
        open={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </>
  );
};

export default OurLeadership;
