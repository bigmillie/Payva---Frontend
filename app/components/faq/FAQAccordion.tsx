"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleMinus, CirclePlus } from "lucide-react";

interface FAQAnswer {
  type: "text" | "list" | "nested";
  content: any;
}

interface FAQItem {
  question: string;
  answer: FAQAnswer;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="space-y-4 max-w-5xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.25 }}
            className="bg-[#FCFCFC] rounded-3xl overflow-hidden"
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

              <span className="font-normal text-lg leading-6 tracking-normal font-famil text-[#2A2A2A]">
                {faq.question}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="px-8 pb-8 text-gray-600 text-sm leading-relaxed space-y-4"
                >
                  {/* TEXT */}
                  {faq.answer.type === "text" && <p>{faq.answer.content}</p>}

                  {/* SIMPLE BULLET LIST */}
                  {faq.answer.type === "list" && (
                    <ul className="list-disc pl-5 space-y-2">
                      {faq.answer.content.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* NESTED SECTIONS */}
                  {faq.answer.type === "nested" && (
                    <div className="space-y-5">
                      {faq.answer.content.map((section: any, i: number) => (
                        <div key={i}>
                          <p className="font-medium text-[#2A2A2A] mb-2">
                            {section.title}
                          </p>

                          <ul className="list-disc pl-5 space-y-2">
                            {section.items.map((item: string, j: number) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
