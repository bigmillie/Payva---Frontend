"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeadingTag from "../commons/HeadingTag";
import { useFeatureCarousel } from "@/context/useFeatureCarousel";
import Link from "next/link";

const features = [
  {
    id: 1,
    title: "Enjoy Instant Transfers",
    description:
      "Send money instantly across Nigeria, the UK, and Canada. No delays, no complications—just reliable transfers whenever you need them",
    image: "/assets/img-p-1.png",
    highlight: false,
  },
  {
    id: 2,
    title: "Receive Money Easily",
    description:
      "Get funds straight into your Payva wallet—seamless and perfect for families, creatives, and students.",
    image: "/assets/img-p-2.png",
    highlight: true,
  },
  {
    id: 3,
    title: "Pay Bills on the Go",
    description:
      "Stay connected to home with easy bill payments for electricity, data, internet, and more.",
    image: "/assets/img-p-3.png",
    highlight: true,
  },
  {
    id: 4,
    title: "Make Tuition Payment Abroad Directly",
    description:
      "Make secure, direct tuition payment to Canadian schools from Nigeria in a few taps.",
    image: "/assets/img-p-4.png",
    highlight: false,
    comingSoon: true,
  },
];

export default function FeatureCarousel() {
  const { activeIndex, direction, goTo } = useFeatureCarousel(features.length);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="bg-transparent pb-24 font-famil">
      {/* ================= HEADER ================= */}
      <div className="max-w-7xl px-6 lg:mx-auto py-16">
        <HeadingTag>Our Features</HeadingTag>
        <h2 className="mt-4 text-xl md:text-3xl lg:text-4xl font-bold text-[#2A2A2A]">
          One App for All Your Cross-Border Money Needs
        </h2>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden px-6">
        {/* Feature Card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-[#E6F9F7] rounded-2xl p-6 mb-10"
        >
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">
            {features[activeIndex].title}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {features[activeIndex].description}
          </p>
        </motion.div>

        {/* Phone Image */}
        <div className="flex justify-center mb-8">
          <motion.img
            key={features[activeIndex].image}
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="w-65 max-w-full object-contain"
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-6 bg-teal-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-6 items-stretch gap-12 relative">
        {/* Image */}
        <div className="flex-1 relative min-h-140 overflow-hidden flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 280, damping: 28 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={features[activeIndex].image}
                alt={features[activeIndex].title}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vertical Progress */}
        <div className="flex flex-col items-center justify-center gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 rounded-full transition-all ${
                activeIndex === index ? "h-10 bg-[#00B4AC]" : "h-4 bg-[#D0E7E5]"
              }`}
            />
          ))}
        </div>

        {/* Feature List */}
        <div className="flex-1 space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              onClick={() => goTo(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-xl cursor-pointer transition-all border ${
                activeIndex === index
                  ? feature.highlight
                    ? "bg-[#E6F9F7] border-[#E6F9F7]"
                    : "bg-white border-[#B3B3B3]"
                  : "bg-white border-[#B3B3B3]"
              }`}
            >
              {feature.comingSoon && (
                <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold text-white bg-teal-600 rounded-full">
                  Coming Soon
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}

          <div className="mt-4 bg-[#E6F9F7] px-9 md:px-16 py-4 md:py-8 rounded-xl border border-[#B3B3B3] flex items-center justify-between gap-4 w-full">
            <h3 className="text-lg font-bold text-gray-900 max-w-60">
              Want to See Everything Payva Can Do?
            </h3>
            <Link
              href="/features"
              className="inline-block px-3 py-2 text-sm font-semibold text-white bg-[#008984] rounded-xl"
            >
              explore all features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
