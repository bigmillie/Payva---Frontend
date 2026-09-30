import { ShieldCheck } from "lucide-react";
import { fintracRegistryLink, msbRegistrationNumber } from "@/utils/routes";

/** Trust signal for the top of the page: Payva's FINTRAC MSB registration,
 * linking to FINTRAC's public registry so visitors can verify it. */
export default function FintracBadge({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  return (
    <a
      href={fintracRegistryLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm transition-colors ${
        tone === "dark"
          ? "bg-white/10 text-white hover:bg-white/15 border border-white/15"
          : "bg-[#E6F9F7] text-[#09253F] hover:bg-[#CCF0EE]"
      }`}
    >
      <ShieldCheck
        size={18}
        className={tone === "dark" ? "text-[#66D2CD]" : "text-[#006D68]"}
      />
      <span>
        <span className="font-semibold">FINTRAC-registered MSB</span>
        <span className="opacity-75"> · {msbRegistrationNumber}</span>
      </span>
      <span className="underline underline-offset-2 opacity-75">Verify</span>
    </a>
  );
}
