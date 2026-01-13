import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  type: "primary" | "secondary";
  className?: string;
}

export default function Logo({ type, className }: LogoProps) {
  return (
    <Link href="/" className="inline-block">
      <Image
        alt="Payva Logo"
        src={type === "primary" ? "/logo.svg" : "/f_logo.svg"}
        height={32}
        width={20}
        className={`size-20 md:size-32 object-contain h-fit ${className}`}
      />
    </Link>
  );
}
