import Image from "next/image";

const PrivacyHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[url('/grid-lines.svg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
        bg-no-repeat
        bg-contain
        bg-center
      "
    >
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/kite-lines.svg"
          width={1500}
          height={1500}
          alt="kite lines"
          className="
            absolute
            right-52
            bottom-32
            w-[50%]
            lg:w-[20%]
            max-w-none
            opacity-90
            translate-x-1/4
            translate-y-1/4
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          px-6 lg:px-10
          pt-38 md:pt-48
          flex
          items-center
          text-center
          justify-between
          flex-col lg:flex-row
          text-white
          font-famil
        "
      >
        {/* LEFT */}
        <div
          className="
            flex
            flex-col
            gap-5
            text-center lg:text-start
            items-center lg:items-start
            max-w-3xl
            pb-12
          "
        >
          <h1
            className="
              text-3xl md:text-5xl
              text-[#E6F9F7]
              leading-[120%] md:leading-[100%]
              tracking-[-2%]
              font-bold
            "
          >
            Privacy
            <span className="text-[#66D2CD] ml-1.5">Policy</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;
