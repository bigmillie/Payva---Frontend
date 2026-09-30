"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronDown } from "lucide-react";
import { payvaTermsConditions } from "@/utils/contents";
import {
  campaignDates,
  maxEarnings,
  referralCampaign,
} from "@/utils/contents/referral";

const referralTerms = payvaTermsConditions
  .flatMap((category) => category.sections)
  .find((section) => section.slug === "referral-program");

export default function ReferralTerms() {
  const [open, setOpen] = useState(false);
  const { name, reward, maxReferrals } = referralCampaign;

  return (
    <section id="terms" className="scroll-mt-20 px-4 md:px-12 pb-8">
      <div className="mx-auto max-w-3xl text-center font-famil text-sm text-[#4D4D4D]">
        <p>
          {name} is a limited-time Payva referral campaign. Eligibility,
          qualifying transaction requirements and reward terms apply.
        </p>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="referral-terms"
          className="mt-2 inline-flex items-center gap-1 font-semibold text-[#006D68] underline underline-offset-4"
        >
          {open ? "Hide" : "View"} full terms &amp; conditions
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div
            id="referral-terms"
            className="mt-6 rounded-3xl bg-[#FCFCFC] border border-[#EEF2F2] p-6 md:p-10 text-left text-[#2A2A2A] leading-relaxed space-y-3"
          >
            <h3 className="text-base font-semibold text-[#09253F]">
              {name} campaign terms
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {campaignDates && <li>Campaign period: {campaignDates}.</li>}
              <li>
                Each successful referral earns CAD ${reward} for you and CAD $
                {reward} for your friend.
              </li>
              <li>
                A maximum of {maxReferrals} successful referrals (CAD $
                {maxEarnings}) per referring customer during the campaign.
              </li>
              <li>
                All qualifying referral activity must be completed within the
                campaign period.
              </li>
            </ul>

            {referralTerms && (
              <>
                <h3 className="pt-4 text-base font-semibold text-[#09253F]">
                  {referralTerms.title}
                </h3>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h3: (props) => (
                      <h4
                        className="pt-2 font-semibold text-[#09253F]"
                        {...props}
                      />
                    ),
                    ul: (props) => (
                      <ul className="list-disc pl-5 space-y-1" {...props} />
                    ),
                  }}
                >
                  {referralTerms.content}
                </ReactMarkdown>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
