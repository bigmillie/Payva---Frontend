import React from "react";
import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";

const UniqueSellingPoint = () => {
  return (
    <section className="bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)] mx-3 md:mx-12 rounded-4xl mb-12">
      <div className="flex font-famil flex-col gap-4 items-start justify-center p-6 py-10 md:p-18">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-4">
          <HeadingTag>Our Features</HeadingTag>
          <h1 className="text-[#ffffff] font-famil text-xl md:text-5xl font-bold leading-tight">
            How is Payva Different from Others?
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mt-4 md:mt-12 font-famil">
          {/* Pay Bills Feature */}
          <div className="bg-[#006D68] rounded-3xl flex flex-col items-start justify-between shadow-md">
            <div className="pt-8 pl-8 pb-0 pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pay Bills Effortlessly
              </h3>
              <p className="text-teal-50/90 text-base md:text-lg mb-8 leading-relaxed">
                Handle essential bills directly from the app—a convenience some
                other apps don't offer.
              </p>
            </div>

            {/* Phone Mockup Image */}
            <div className="pl-8 md:pl-8 pb-0">
              <img
                src="/assets/features/paybills.png"
                alt="Pay bills interface"
                className="w-35.5 md:w-60 md:max-w-sm mb-0"
              />
            </div>
          </div>

          {/* Cross-Border Transfers Feature */}
          <div className="bg-[#006D68] rounded-3xl shadow-md">
            {/* Phone Mockup Image */}
            <div className="flex pl-8 mb-12">
              <img
                src="/assets/features/crossborder.png"
                alt="Cross-border transfers interface"
                className="w-35.5 md:w-60 md:max-w-sm "
              />
            </div>
            <div className="pt-8 pl-8 pb-8 pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Seamless Cross-Border Transfers
              </h3>
              <p className="text-teal-50/90 text-base md:text-lg leading-relaxed">
                Send and receive money instantly without juggling multiple apps.
              </p>
            </div>
          </div>
        </div>

        {/* No Hidden Fees Feature - Full Width */}
        <div className="bg-[#006D68] h-136.75 overflow-hidden rounded-3xl shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pl-10 pt-10 relative">
            <div className="flex flex-col items-start justify-between order-2 lg:order-1">
              <div className="md:mb-80">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  No Hidden Fees, No Markup
                </h3>
                <p className="text-teal-50/90 text-base md:text-lg leading-relaxed">
                  Enjoy fair, transparent exchange rates every time—what you see
                  is what your recipient gets.
                </p>
              </div>

              {/* Decorative Arrow Path */}
              <div className="absolute left-0 h-48 hidden lg:block">
                <Image
                  height={1200}
                  width={800}
                  src="/assets/features/upward-arrow.svg"
                  alt="Arrow"
                  className="scale-80 text-teal-400"
                />
              </div>
            </div>

            {/* Transaction Receipt Image */}
            <div className="absolute -bottom-91 md:-bottom-32 right-20 lg:order-2">
              <Image
                height={550}
                width={350}
                src="/assets/features/hiddenfees.png"
                alt="Transaction receipt showing no fees"
                className="w-50 md:h-140 md:w-85.5 md:max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSellingPoint;
