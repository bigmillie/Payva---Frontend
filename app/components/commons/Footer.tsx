import Logo from "./Logo";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { quickLinks } from "@/utils/contents/Footer.Content";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="
        bg-[url('/grid-lines.sg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
        bg-no-repeat
        bg-contain
        bg-center
        relative
        overflow-hidden
        mx-0 md:mx-12
        rounded-none md:rounded-4xl
        mb-12
      "
    >
      <div
        className="
          flex flex-col
          gap-8 md:gap-8
          items-start
          px-4 md:px-20
          py-8 md:pb-10 md:pt-4
          w-full
          font-famil
        "
      >
        {/* Logo */}
        <div className="px-4 md:ml-1">
          <Logo className="scale-110 md:scale-120" type="primary" />
        </div>

        {/* Links */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-12 md:gap-20
            w-full
          "
        >
          {quickLinks.map((section) => (
            <div key={section.title} className="flex flex-col items-start">
              <h4 className="text-white font-extrabold text-[16px] mb-4">
                {section.title}
              </h4>
              <div className="flex flex-col items-start gap-3 text-white text-sm">
                {section.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.route}
                    className="hover:underline"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Address and Contact */}
        <div
          className="
            flex flex-col-reverse md:flex-row
            items-center
            justify-between
            gap-8
            w-full
          "
        >
          <p className="text-white text-sm text-center md:text-left">
            &copy; 2026 — Copyright.
          </p>
          <p className="text-white text-sm text-center md:text-left">
            Suite 900, 903 8 Avenue SW, Calgary, Alberta, T2P 0P7 Canada
          </p>

          <div className="flex items-center gap-5">
            <Link href="https://www.facebook.com/Payvaofficial?ref=1">
              <Facebook className="text-white w-5 h-5" />
            </Link>
            <Link href="https://www.instagram.com/payvapayment/">
              <Instagram className="text-white w-5 h-5" />
            </Link>
            <Link href="https://x.com/Payvapayment">
              <Twitter className="text-white w-5 h-5" />
            </Link>
            <Link href="https://www.tiktok.com/@payvaofficial?is_from_webapp=1&sender_device=pc">
              <Image
                src="/assets/tiktok.svg"
                alt="Payva Payments Tiktok"
                height={10}
                width={10}
                className="text-white w-6 h-6"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/payvapayment">
              <Linkedin className="text-white w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="
            flex flex-col-reverse md:flex-row
            items-center
            justify-between
            gap-6
            w-full
          "
        >
          <p className="text-white text-sm text-center md:text-left w-full">
            Payva Payment Limited is registered and regulated by the Financial
            Transactions and Reports Analysis Centre of Canada (FINTRAC) as a
            Money Service Business (C100000757)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
