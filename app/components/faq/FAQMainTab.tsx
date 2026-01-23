"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ourHomeFAQs } from "@/utils/contents";
import FAQAccordionMain from "./FaqAccordionMain";

export default function FAQMainTab() {
  const [activeTab, setActiveTab] = useState(ourHomeFAQs[0].key);

  const activeCategory = ourHomeFAQs.find((item) => item.key === activeTab);

  return (
    <section className="bg-[#FFFFFF] overflow-x-hidden">
      <div className="px-6 md:px-12 pb-32 pt-20 max-w-8xl mx-auto font-famil">
        <div className="w-full md:border-t border-gray-200 flex flex-col md:flex-row md:gap-12 items-start">
          {/* Accordion */}
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                className="w-full pt-8 md:pt-6"
                key={activeCategory.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <FAQAccordionMain faqs={activeCategory.faqs} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
