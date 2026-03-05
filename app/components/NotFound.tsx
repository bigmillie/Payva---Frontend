import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <section
        className="
          pb-24 md:pb-30
          relative
          overflow-hidden
          bg-[url('/grid-lines.svg'),linear-gradient(116.28deg,#09253F_0%,#006D68_131.82%)]
          bg-no-repeat
          bg-contain
          bg-center
          min-h-screen
          flex
          items-center
          justify-center
        "
        id="exchange-calculator"
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
              text-center lg:text-center
              items-center lg:items-center
              max-w-md md:max-w-3xl
              w-full
            "
          >
            <h3>Page Not Found</h3>
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

            <Link
              href="/"
              className="bg-[#66D2CD] text-[#09253F] hover:bg-[#5bb8b0] font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
