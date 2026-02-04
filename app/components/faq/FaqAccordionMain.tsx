"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleMinus, CirclePlus } from "lucide-react";
import { FAQAnswer, FAQItem } from "@/utils/types";

export default function FAQAccordionMain({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="space-y-4 w-full text-lg mt-0"
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
            className={`${
              isOpen ? "bg-[#F4FFFE]" : "bg-[#FCFCFC]"
            } rounded-3xl overflow-hidden w-full`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex gap-5 items-center p-8 text-left"
            >
              <motion.span
                className="text-teal-600"
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
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                >
                  {renderAnswer(faq.answer)}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// rendering answer function (if needed in future enhancements)
function renderAnswer(answer: FAQAnswer) {
  switch (answer.type) {
    case "text":
      return <p>{answer.content as string}</p>;

    case "list":
      return (
        <ul className="list-disc pl-5 space-y-2">
          {(answer.content as string[]).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );

    case "nested":
      return (
        <div className="space-y-4">
          {(answer.content as { title?: string; items: string[] }[]).map(
            (group, idx) => (
              <div key={idx}>
                {group.title && (
                  <p className="font-medium text-gray-900 mb-2">
                    {group.title}
                  </p>
                )}
                <ul className="list-disc pl-5 space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      );
  }
}
