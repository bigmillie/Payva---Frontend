"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ourHomeFAQs } from "@/utils/contents";
import FAQAccordion from "./FAQAccordion";
import HeadingTag from "../commons/HeadingTag";

export default function FAQTabs() {
  const [activeTab, setActiveTab] = useState(ourHomeFAQs[0].key);

  const activeCategory = ourHomeFAQs.find((item) => item.key === activeTab);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 font-famil">
      {/* Header */}
      <div className="mb-6 md:mb-10">
        <HeadingTag>Our FAQs</HeadingTag>
        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-[#4D4D4D]">
          Here Are Answers to Some of our Frequently Asked Questions
        </h2>
      </div>

      {/* Tabs */}
      <div
        className="flex flex-wrap gap-3  overflow-hidden
        bg-[url('/grid-lines.svg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
        bg-no-repeat
        bg-contain
        bg-center p-6 rounded-3xl mb-10"
      >
        {ourHomeFAQs.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === item.key
                  ? "bg-teal-400 text-teal-900 border-2 border-[#00B4AC] "
                  : "bg-teal-700 text-white hover:bg-teal-600"
              }
            `}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* Animated Accordion */}
      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeCategory.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <FAQAccordion faqs={activeCategory.faqs} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
