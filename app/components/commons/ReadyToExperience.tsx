import Link from "next/link";
import Image from "next/image";

const ReadyToExperience = () => {
  return (
    <section
      id="waitlist"
      className="
        bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)]
        mx-2 md:mx-12
        rounded-2xl md:rounded-4xl
        mb-12
      "
    >
      <div
        className="
          flex flex-col
          gap-4 md:gap-6
          items-center
          justify-center
          py-14 md:py-18
          px-4
          max-w-4xl
          mx-auto
        "
      >
        <h1
          className="
            text-2xl md:text-5xl
            text-white
            text-center
            leading-tight md:leading-[100%]
            tracking-tight
            font-bold
            px-4
          "
        >
          Ready to Experience Cross-Border Payments the Payva Way?
        </h1>

        <p className="text-white text-center text-sm md:text-base max-w-lg">
          Download the Payva app now and experience cross-border payments.
        </p>

        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center
            mx-auto
            max-w-xl gap-3
          "
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.paymentpayva.payva"
            target="_blank"
          >
            <Image
              src="/google-play.png"
              width={160}
              height={160}
              alt="Google Play Store"
            />
          </Link>
          <Link
            href="https://apps.apple.com/ng/app/payva-payment/id6755332619"
            target="_blank"
          >
            <Image
              src="/apple-store.png"
              width={160}
              height={160}
              alt="Apple App Store"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToExperience;
