import FAQAccordion from "../faq/FAQAccordion";
import type { FAQItem } from "@/utils/types";
import { ReferralCtaButton } from "./ReferralCta";

export default function ReferralFAQ({ faqs }: { faqs: FAQItem[] }) {
  return (
    <section id="faqs" className="scroll-mt-20 bg-[#F7F9F9]">
      <div className="mx-auto max-w-5xl px-4 md:px-12 py-20 md:py-28 font-famil">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] text-[#09253F]">
          Got Questions?{" "}
          <span className="text-[#006D68]">We&rsquo;ve got you.</span>
        </h2>

        <div className="mt-10">
          <FAQAccordion faqs={faqs} />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-[#4D4D4D]">
            Ready? Your link is in the Payva app.
          </p>
          <ReferralCtaButton location="faq" className="w-fit" />
        </div>
      </div>
    </section>
  );
}
