"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleMinus, CirclePlus } from "lucide-react";

interface PolicySection {
  title: string;
  content: string;
}

export default function PrivacyAccordionMain({
  sections,
}: {
  sections: PolicySection[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="space-y-4 w-full text-lg"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {sections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.25 }}
            className={`${
              isOpen ? "bg-[#F4FFFE]" : "bg-[#FCFCFC]"
            } rounded-3xl overflow-hidden w-full`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex gap-5 items-center p-8 text-left"
            >
              <motion.span
                className="text-teal-600 shrink-0"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <CircleMinus /> : <CirclePlus />}
              </motion.span>

              <span className="font-medium text-2xl leading-6 text-[#2A2A2A]">
                {section.title}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="px-8 pb-6 text-gray-600 text-base leading-relaxed"
                >
                  {section.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
