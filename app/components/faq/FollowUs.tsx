"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  sectionVariants,
  containerVariants,
  fadeInUp,
  cardVariants,
} from "@/utils/lib/variants";

const FollowUs = () => {
  return (
    <section className="bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)] mx-4 md:mx-12 rounded-2xl md:rounded-4xl mb-12 overflow-hidden">
      <motion.div
        className="flex font-famil flex-col gap-4 items-center justify-center py-12 md:py-18 px-6 md:px-0 max-w-5xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-2xl md:text-5xl text-white text-center leading-tight tracking-[-2%] font-bold"
        >
          Follow Us on Our Social Media Channels
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-white text-center text-sm md:text-base leading-7 md:leading-8 max-w-3xl"
        >
          Keep up with Payva&apos;s latest updates, tips, and announcements.
          Join our online community and be part of the conversation!
        </motion.p>

        {/* Social Icons */}
        <motion.div
          variants={containerVariants}
          className="flex items-center gap-4 mt-2"
        >
          <motion.div variants={cardVariants} whileHover={{ scale: 1.1 }}>
            <Link
              href="https://www.facebook.com/Payvaofficial?ref=1"
              target="_blank"
              className="text-white"
            >
              <Image
                src="/assets/about/facebook.svg"
                alt="Facebook"
                width={28}
                height={28}
              />
            </Link>
          </motion.div>

          <motion.div variants={cardVariants} whileHover={{ scale: 1.1 }}>
            <Link
              href="https://www.tiktok.com/@payvaofficial?is_from_webapp=1&sender_device=pc"
              target="_blank"
              className="text-white"
            >
              <Image
                src="/assets/tiktok.svg"
                alt="TikTok"
                width={28}
                height={28}
              />
            </Link>
          </motion.div>

          <motion.div variants={cardVariants} whileHover={{ scale: 1.1 }}>
            <Link
              href="https://www.linkedin.com/company/payvapayment"
              target="_blank"
              className="text-white"
            >
              <Image
                src="/assets/about/linkedin.svg"
                alt="LinkedIn"
                width={28}
                height={28}
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FollowUs;
