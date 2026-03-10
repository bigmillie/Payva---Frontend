"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SingleBlogHeroProps {
  title: string;
  excerpt?: string | null;
}

const SingleBlogHero = ({ title, excerpt }: SingleBlogHeroProps) => {
  return (
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

      <div
        className="
          relative
          z-10
          px-6 md:px-20
          pt-36 pb-12 md:pt-48
          flex
          items-center
          justify-between
          flex-col
          text-white
          font-famil
        "
      >
        <motion.div
          className="
            flex
            flex-col
            gap-5
            text-center
            items-center
            md:max-w-4xl
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="
              text-xl md:text-5xl
              text-[#E6F9F7]
              leading-[120%] md:leading-[110%]
              tracking-[-2%]
              font-bold
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {title}
          </motion.h1>

          {excerpt ? (
            <motion.p
              className="
                text-sm md:text-xl
                md:leading-8
                text-white
                max-w-3xl
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {excerpt}
            </motion.p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default SingleBlogHero;
