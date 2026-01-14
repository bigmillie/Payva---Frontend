import Logo from "./Logo";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  LocateFixedIcon,
  Phone,
  Twitter,
} from "lucide-react";
import { quickLinks } from "@/utils/contents/Footer.Content";

const Footer = () => {
  return (
    <footer
      className="
        bg-[url('/grid-lines.svg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
        bg-no-repeat
        bg-contain
        bg-center
        relative
        overflow-hidden
        mx-0 md:mx-12
        rounded-none md:rounded-4xl
      "
    >
      <div
        className="
          flex flex-col
          gap-14 md:gap-16
          items-start
          px-4 md:px-32
          py-14 md:py-20
          w-full
          font-famil
        "
      >
        {/* Logo */}
        <div className="px-4 md:ml-5">
          <Logo className="scale-110 md:scale-140" type="primary" />
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
          <p className="text-white text-sm text-center md:text-left max-w-sm">
            <Link
              href="https://maps.app.goo.gl/9vSza4jcYcu6HmX8A"
              className="flex flex-col md:flex-row items-center gap-1"
            >
              <LocateFixedIcon className="inline-block mb-1 mr-2 w-5 h-5" />
              <p>
                Suite 900, 903 8 Avenue SW, Calgary, Alberta, T2P 0P7 Canada
              </p>
            </Link>
          </p>

          <div className="flex text-sm text-white text-center md:text-left">
            <Link href="tel:+18254885474" className="flex items-center gap-1">
              <Phone className="inline-block mr-2 w-5 h-5" />
              <p>+18254885474</p>
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <Link href="">
              <Facebook className="text-white w-5 h-5" />
            </Link>
            <Link href="">
              <Instagram className="text-white w-5 h-5" />
            </Link>
            <Link href="">
              <Twitter className="text-white w-5 h-5" />
            </Link>
            <Link href="">
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
          <p className="text-white text-sm text-center md:text-left">
            &copy; 2026 — Copyright.
          </p>

          <p className="text-white text-sm text-center md:text-left max-w-xl">
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
