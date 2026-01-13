import CurrencyConverter from "../CurrencyConverter";
import Image from "next/image";
import FlipCountdown from "../Countdown";
import Button from "../commons/Button";

const HomeHero = () => {
  return (
    <section
      className="
        pb-20
        relative
        overflow-hidden
        bg-[url('/grid-lines.svg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
        bg-no-repeat
        bg-contain
        bg-center
      "
    >
      <div
        className="
          px-6 md:px-16
          pt-44 md:pt-52
          flex
          flex-col gap-12 lg:flex-row
          items-center lg:items-start
          justify-between
          text-white
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            flex flex-col
            gap-5 md:gap-6
            text-center lg:text-start
            items-center lg:items-start
            max-w-md md:max-w-3xl
            w-full
          "
        >
          <h1
            className="
              text-3xl md:text-6xl
              text-[#E6F9F7]
              leading-[120%] md:leading-[100%]
              tracking-[-2%]
              font-bold
            "
          >
            Move Your Money as{" "}
            <span className="text-[#66D2CD] italic">Easily</span> as You Want
          </h1>

          <p
            className="
              text-sm md:text-xl
              leading-6 md:leading-8
              text-white
              tracking-normal
              max-w-full md:max-w-2xl
            "
          >
            From sending and receiving to paying bills and handling tuition,
            Payva brings your essentials together so you can move money with
            speed and ease.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col items-center text-center lg:items-start max-w-md w-full mt-4 md:mx-0">
            <span className="text-[#C5D4E0] text-sm md:text-base block pb-4">
              Be the first to know when the Payva app is live.
            </span>
            <div className="lg:text-start mx-0 lg:ml-8">
              <FlipCountdown launchDate="2026-03-30T00:00:00" />
            </div>
            <div className="flex flex-row items-stretch bg-white p-0.5 rounded-lg mt-5 gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 outline-none placeholder:text-slate-400 text-[#006D68] rounded-md"
              />
              <Button className="text-sm shrink-0 px-5 py-3 w-fit">
                Submit Email
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full mt-10 md:mt-0 flex justify-center md:justify-end">
          {/* Kite lines (DECORATION) */}
          <Image
            src="/kite-lines.svg"
            width={1500}
            height={1500}
            alt="kite lines"
            className="
              absolute
              z-10
              -bottom-24
              -right-24
              w-[90%] lg:w-[140%]
              max-w-none
              opacity-80
              pointer-events-none
            "
          />

          {/* Currency Converter */}
          <div className="relative z-20 w-full lg:max-w-lg">
            <CurrencyConverter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
