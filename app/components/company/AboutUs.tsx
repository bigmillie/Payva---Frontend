"use client";

// import { useState } from "react";
// import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";
// import Button from "../commons/Button";
// import WaitlistPopup from "../commons/WaitlistPopup";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  fadeInRight,
} from "@/utils/lib/variants";

const AboutUs = () => {
  // const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <section className="bg-[#FFFFFF]">
        <motion.div
          className="px-4 md:px-12 pt-24 pb-32 flex flex-col max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Heading */}
          {/* <motion.div variants={itemVariants}>
            <HeadingTag>About Us</HeadingTag>
          </motion.div> */}

          {/* Intro Row */}
          <motion.div
            className="mt-6 flex flex-col md:flex-row gap-6 items-center justify-between"
            variants={containerVariants}
          >
            {/* Image */}
            <Image
              src="/assets/about/about-banner.png"
              alt="Our Lens"
              width={700}
              height={420}
              className="h-full w-full md:w-1/2 flex-1 object-contain rounded-xl"
            />

            {/* Text */}
            <motion.div
              className="flex font-famil flex-col gap-6 md:p-4"
              variants={fadeInRight}
            >
              <h2 className="text-3xl text-[#2A2A2A] font-bold">About Payva</h2>

              <p className="text-[#4D4D4D] text-lg">
                Behind every transfer is someone showing up for family. Payva
                makes that easier. We help Nigerians home and abroad move money
                across the UK, Canada, and Nigeria with confidence—easier, more
                affordable, and with no worrying about delays or unclear rates.
              </p>

              {/* <Button
                onClick={() => setShowWaitlist(true)}
                className="text-sm shrink-0 px-5 w-fit"
              >
                Join the waitlist
              </Button> */}
            </motion.div>
          </motion.div>

          {/* Story Block */}
          <motion.div
            className="bg-[#004F4C] p-6 md:p-12 font-famil rounded-xl mt-20"
            variants={itemVariants}
          >
            <motion.h2
              className="text-2xl md:text-3xl text-white font-bold mb-6"
              variants={itemVariants}
            >
              When sending money home stopped feeling safe, Payva was born
            </motion.h2>

            <motion.div className="space-y-6" variants={containerVariants}>
              {[
                "Many Nigerians abroad carry a steady sense of responsibility—the quiet duty to show up for the people who raised them and still count on them back home.",
                "When our founder moved abroad, he faced the same uphill battle countless immigrants know too well. Sending money back home or to Canada required far more effort than it should have. He needed to support his family, pay bills, and stay connected. The formal options were slow and expensive. The informal ones promised good rates but came with real fear—no protection, no guarantees, and no peace of mind until the money finally dropped.",
                "There were days he waited hours, refreshing Telegram chats, hoping the exchanger on the other end would release the funds. The rates kept shifting, the delays were frustrating, and the uncertainty never really went away. Eventually, he realised this wasn’t just his story. It was the story of millions of immigrants trying to support loved ones, build new lives, and manage their finances with dignity.",
                "Payva grew out of that frustration, but it’s driven by something bigger: a promise that no one should have to risk their hard-earned money just to show up for family.",
                "What started as one person’s struggle has become our mission—making cross-border payments feel local, simple, and trustworthy for every immigrant sending love back home.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-[#E6F9F7] text-base"
                  variants={itemVariants}
                >
                  {text}
                </motion.p>
              ))}

              {/* Quote */}
              <motion.div
                className="bg-[#006D68] rounded-2xl p-4"
                variants={itemVariants}
              >
                <p className="text-[#E6F9F7] text-base">
                  “Payva is more than a product. It&apos;s a promise that what
                  we went through, others shouldn&apos;t have to. We started
                  from a personal struggle, but our mission is global:
                  <br />
                  <span className="text-[#99E1DD] text-xl font-medium italic">
                    To make international payments feel local, effortless, and
                    secure, no matter where home is.”
                  </span>
                </p>

                <p className="text-[#E6F9F7] text-lg text-end mt-4">
                  Victor Ejome, Founder
                </p>
              </motion.div>
            </motion.div>
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

export default AboutUs;
