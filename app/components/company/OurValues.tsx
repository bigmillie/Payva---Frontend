"use client";

// import { useState } from "react";
import { motion } from "framer-motion";
// import Button from "../commons/Button";
// import HeadingTag from "../commons/HeadingTag";
// import WaitlistPopup from "../commons/WaitlistPopup";
import { containerVariants, itemVariants } from "@/utils/lib/variants";

const OurValues = () => {
  // const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <section
        className="
          bg-[linear-gradient(116.28deg,#004F4C_0%,#141B34_131.82%)]
          mx-0 md:mx-12
          rounded-none md:rounded-4xl
          mb-12
        "
      >
        <motion.div
          className="
            p-6 md:p-12
            flex flex-col md:flex-row
            items-center md:items-start
            justify-between
            gap-12 md:gap-18
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Left column */}
          <div
            className="
              flex flex-col
              items-center md:items-start
              text-center md:text-left
              gap-4
              max-w-xl
              w-xl
            "
          >
            {/* <HeadingTag>Our Values</HeadingTag> */}

            <h1
              className="
                text-white
                font-famil
                text-2xl md:text-4xl
                font-bold
                leading-tight
              "
            >
              Our Core Values
            </h1>

            {/* <Button
              onClick={() => setShowWaitlist(true)}
              className="text-sm px-5 mt-2"
            >
              Join the waitlist
            </Button> */}
          </div>

          {/* Values Grid */}
          <motion.div
            className="
              grid
              grid-cols-1 sm:grid-cols-2
              gap-6 md:gap-8
              font-famil
              w-full
            "
            variants={containerVariants}
          >
            {[
              {
                title: "Community-first",
                text: "Built by immigrants, for immigrants. Your success is our success, so we prioritize you.",
                dark: true,
              },
              {
                title: "Trust without compromise",
                text: "We handle your hard-earned money with care. Security and reliability are non-negotiable.",
              },
              {
                title: "Innovation",
                text: "We use technology to make transfers faster, cheaper, and simpler—always improving for you.",
              },
              {
                title: "Empowerment",
                text: "Financial services should lift people up, not exploit them. We help our community build better futures.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`p-6 md:p-8 rounded-xl shadow-lg ${
                  value.dark
                    ? "bg-[#006D68] text-white"
                    : "bg-[#E6F9F7] text-[#2A2A2A]"
                }`}
              >
                <h2 className="text-xl md:text-3xl font-bold mb-2">
                  {value.title}
                </h2>
                <p
                  className={`text-sm md:text-lg ${
                    value.dark ? "" : "text-[#4D4D4D]"
                  }`}
                >
                  {value.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* <WaitlistPopup
        open={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      /> */}
    </>
  );
};

export default OurValues;
