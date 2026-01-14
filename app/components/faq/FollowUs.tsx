import Image from "next/image";
import Link from "next/link";

const FollowUs = () => {
  return (
    <section className="bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)] mx-4 md:mx-12 rounded-2xl md:rounded-4xl mb-12">
      <div className="flex font-famil flex-col gap-4 items-center justify-center py-12 md:py-18 px-6 md:px-0 max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-5xl text-white text-center leading-tight tracking-[-2%] font-bold">
          Follow Us on Our Social Media Channels
        </h1>

        <p className="text-white text-center text-sm md:text-base leading-7 md:leading-8 max-w-3xl">
          Keep up with Payva&apos;s latest updates, tips, and announcements.
          Join our online community and be part of the conversation!
        </p>

        <div className="flex items-center gap-4 mt-2">
          <Link
            href="https://www.facebook.com/payvaapp"
            target="_blank"
            className="text-white"
          >
            <Image
              src="/assets/about/facebook.svg"
              alt="Facebook"
              width={28}
              height={28}
            />
          </Link>

          <Link
            href="https://www.twitter.com/payvapayment"
            target="_blank"
            className="text-white"
          >
            <Image
              src="/assets/about/twitter.svg"
              alt="Twitter"
              width={28}
              height={28}
            />
          </Link>

          <Link
            href="https://www.instagram.com/payvapayment"
            target="_blank"
            className="text-white"
          >
            <Image
              src="/assets/about/instagram.svg"
              alt="Instagram"
              width={28}
              height={28}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/company/payvaapp"
            target="_blank"
            className="text-white"
          >
            <Image
              src="/assets/about/linkedin.svg"
              alt="LinkedIn"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
