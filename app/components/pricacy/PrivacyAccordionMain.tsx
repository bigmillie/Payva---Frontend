"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleMinus, CirclePlus } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PolicySection {
  title: string;
  slug: string;
  content: string;
}

export default function PrivacyAccordionMain({
  sections,
}: {
  sections: PolicySection[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.div className="space-y-4 w-full">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={section.slug}
            id={section.slug}
            className={`${
              isOpen ? "bg-[#F4FFFE]" : "bg-[#FCFCFC]"
            } rounded-3xl overflow-hidden`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex gap-5 items-center p-8 text-left"
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
                  className="px-8 pb-6 prose prose-sm max-w-none text-gray-700"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ node, ...props }) => (
                        <h2
                          className="text-base font-semibold text-gray-900 mt-4"
                          {...props}
                        />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3
                          className="text-sm font-semibold text-gray-800 mt-3"
                          {...props}
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="ml-4 list-disc" {...props} />
                      ),
                    }}
                  >
                    {section.content}
                  </ReactMarkdown>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
}
