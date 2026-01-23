"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ourMainFAQs } from "@/utils/contents";
import FAQAccordionFull from "./FAQAccordionFull";

export default function FAQMainTabsFull() {
  const [activeTab, setActiveTab] = useState(ourMainFAQs[0].key);

  const activeCategory = ourMainFAQs.find((item) => item.key === activeTab);

  return (
    <section className="bg-[#FFFFFF] overflow-x-hidden">
      <div className="px-6 md:px-12 pb-32 pt-20 max-w-8xl mx-auto font-famil">
        <div className="w-full md:border-t border-gray-200 flex flex-col md:flex-row md:gap-12 items-start">
          {/* Tabs */}
          <div
            className="
              w-full max-w-md md:w-1/4
              flex flex-row md:flex-col
              gap-3
              overflow-x-auto md:overflow-visible
              whitespace-nowrap md:whitespace-normal
              scrollbar-hide
              bg-white p-4 md:p-6
              md:border md:border-gray-200
            "
          >
            {ourMainFAQs.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`
                  shrink-0
                  px-6 py-3
                  rounded-full md:rounded-lg
                  text-sm font-medium
                  transition
                  ${
                    activeTab === item.key
                      ? "bg-[#E6F9F7] text-[#006D68]"
                      : "bg-transparent border border-[#D0D5DD] text-[#344054] hover:bg-gray-50"
                  }
                `}
              >
                {item.category}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory.key}
                className="w-full pt-8 md:pt-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <FAQAccordionFull faqs={activeCategory.faqs} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
