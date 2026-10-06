"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronDown } from "lucide-react";
import { payvaTermsConditions } from "@/utils/contents";
import { formatMoney, type ReferralCampaign } from "@/utils/contents/referral";

export default function ReferralTerms({
  campaign,
}: {
  campaign: ReferralCampaign;
}) {
  const [open, setOpen] = useState(false);
  const reward = formatMoney(campaign, campaign.reward);

  const legalTerms = campaign.legalTermsSlug
    ? payvaTermsConditions
        .flatMap((category) => category.sections)
        .find((section) => section.slug === campaign.legalTermsSlug)
    : undefined;

  return (
    <section id="terms" className="scroll-mt-20 px-4 md:px-12 pb-8">
      <div className="mx-auto max-w-3xl text-center font-famil text-sm text-[#4D4D4D]">
        <p>
          {campaign.name} is a limited-time Payva referral campaign.
          Eligibility, qualifying transaction requirements and reward terms
          apply.
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
              {campaign.name} campaign terms
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {campaign.dates && <li>Campaign period: {campaign.dates}.</li>}
              <li>
                Your friend must be new to Payva, sign up with your referral
                link and complete a qualifying transfer of{" "}
                {formatMoney(campaign, campaign.minTransfer)} or more.
              </li>
              <li>
                Each successful referral earns {reward} for you and {reward} for
                your friend.
              </li>
              <li>
                A maximum of {campaign.maxReferrals} successful referrals (
                {formatMoney(campaign, campaign.maxEarnings)}) per referring
                customer during the campaign.
              </li>
              <li>
                All qualifying referral activity must be completed within the
                campaign period.
              </li>
            </ul>

            {legalTerms && (
              <>
                <h3 className="pt-4 text-base font-semibold text-[#09253F]">
                  {legalTerms.title}
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
                  {legalTerms.content}
                </ReactMarkdown>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
