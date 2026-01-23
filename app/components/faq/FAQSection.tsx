"use client";

import { motion, AnimatePresence } from "framer-motion";
import FAQAccordion from "./FAQAccordion";
import HeadingTag from "../commons/HeadingTag";
import { FAQCategory } from "@/utils/types";
import Link from "next/link";

interface FAQSectionProps {
  faqs: FAQCategory[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs,
  title,
  subtitle = "Here Are Answers to Some of our Frequently Asked Questions",
}: FAQSectionProps) {
  const activeCategory = faqs?.[0];

  if (!activeCategory) return null;

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 font-famil mb-16">
      {/* Header */}
      <div className="mb-6 md:mb-10">
        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-[#4D4D4D]">
          {subtitle}
        </h2>
      </div>

      {/* Animated Accordion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <FAQAccordion faqs={activeCategory.faqs} />
        </motion.div>
      </AnimatePresence>

      {/* Link button */}
      <div className="mt-8 flex items-center justify-center">
        <Link
          href="/contact"
          className="mx-auto text-center inline-block px-4 py-2 text-sm font-semibold text-white bg-[#008984] rounded-lg w-fit mt-8 hover:bg-[#006f6c] transition"
        >
          Read more FAQs
        </Link>
      </div>
    </section>
  );
}
