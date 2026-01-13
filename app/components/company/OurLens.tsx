import React from "react";
import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";

const OurLens = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="px-6 md:px-12 pt-24 pb-32 flex items-start flex-col max-w-7xl mx-auto">
        <HeadingTag>Our Lens</HeadingTag>
        <div className="mt-6 flex flex-col md:flex-row gap-6 justify-between">
          <Image
            src="/assets/about/about-1.png"
            alt="Our Lens"
            width={700}
            height={420}
            className="h-full w-full md:w-1/2 object-contain rounded-xl"
          />
          <div className="flex font-famil flex-col justify-between gap-6">
            <div className="bg-[#EBF2F6] text-white p-8 rounded-xl">
              <h2 className="text-3xl text-[#2A2A2A] font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-[#4D4D4D] text-base">
                To make international payments feel local, helping people
                support families and opportunities beyond borders.
              </p>
            </div>
            <div className="bg-[#CCF0EE] p-8 rounded-xl flex-1">
              <h2 className="text-3xl text-[#2A2A2A] font-bold mb-4">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="text-[#4D4D4D] text-base">
                  To simplify cross-border payments with a fast, transparent,
                  and user-friendly experience. We&apos;re building a remittance
                  ecosystem that connects people across countries by offering:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li className="text-[#4D4D4D] text-base">
                    Secure and compliant transfers
                  </li>
                  <li className="text-[#4D4D4D] text-base">
                    Honest, upfront fees
                  </li>
                  <li className="text-[#4D4D4D] text-base">Great rates</li>
                  <li className="text-[#4D4D4D] text-base">
                    A smooth, intuitive experience
                  </li>
                </ul>

                <p className="text-[#4D4D4D] text-base">
                  Our goal is to give individuals and families a safer, faster,
                  and more affordable way to move money—whether it&apos;s for
                  bills, school fees, or personal financial support without
                  delays, friction, or uncertainty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLens;
