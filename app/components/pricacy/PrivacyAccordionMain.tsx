"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleMinus, CirclePlus } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { usePathname } from "next/navigation";

interface PolicySection {
  title: string;
  content: string;
  slug: string;
}

export default function PrivacyAccordionMain({
  sections,
}: {
  sections: PolicySection[];
}) {
  const pathname = usePathname();
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Deep-link support
  useEffect(() => {
    if (!hash) return;

    const index = sections.findIndex((section) => `#${section.slug}` === hash);

    if (index !== -1) {
      setOpenIndex(index);
      document
        .getElementById(sections[index].slug)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, sections]);

  return (
    <motion.div className="space-y-4 w-full">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={section.slug}
            id={section.slug}
            className={`rounded-3xl overflow-hidden ${
              isOpen ? "bg-[#F4FFFE]" : "bg-[#FCFCFC]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-5 p-8 text-left"
            >
              <span className="text-teal-600">
                {isOpen ? <CircleMinus /> : <CirclePlus />}
              </span>

              <span className="text-lg font-medium text-[#2A2A2A]">
                {section.title}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="
                    px-8 pb-6
                    text-gray-600
                    prose prose-sm md:prose-base
                    max-w-none
                  "
                >
                  <ReactMarkdown>{section.content}</ReactMarkdown>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
}
