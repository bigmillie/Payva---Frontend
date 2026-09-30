import { CircleCheck } from "lucide-react";
import { bankOfCanadaRegistryLink, fintracRegistryLink } from "@/utils/routes";

// Payva's regulators, each linking to the public registry that lists it.
const registrations = [
  { label: "FINTRAC-registered MSB", href: fintracRegistryLink },
  {
    label: "Registered with the Bank of Canada",
    href: bankOfCanadaRegistryLink,
  },
];

/** Trust signal for the top of the page, beside the calculator. */
export default function RegulatorBadge({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full px-5 py-2.5 text-xs md:text-sm ${
        tone === "dark"
          ? "bg-white/10 text-white border border-white/15"
          : "bg-[#E6F9F7] text-[#09253F]"
      }`}
    >
      {registrations.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold hover:underline underline-offset-4"
        >
          <CircleCheck
            size={17}
            className={tone === "dark" ? "text-[#66D2CD]" : "text-[#006D68]"}
          />
          {label}
        </a>
      ))}
    </div>
  );
}
