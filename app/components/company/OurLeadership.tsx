import React from "react";
import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";
import Button from "../commons/Button";

const OurLeadership = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="px-6 md:px-12 pt-24 pb-18 gap-10 flex items-start flex-col md:flex-row justify-between max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-4 max-w-md">
          <HeadingTag>Our Leadership</HeadingTag>
          <h1 className="text-[#2A2A2A] font-famil text-3xl md:text-5xl font-bold leading-tight">
            Meet Some of Our Team Members
          </h1>
          <Button href="#waitlist" className="text-sm shrink-0 px-5">
            Submit Email
          </Button>
        </div>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="">
            <Image
              src="/assets/about/ceo1.jpeg"
              alt="Leader 1"
              width={400}
              height={200}
              className="w-80 h-80 rounded-xl object-cover"
            />
            <h3 className="text-xl font-bold mt-2">Victor Ejome</h3>
            <p className="text-gray-600">CEO/Founder</p>
          </div>
          <div className="">
            <Image
              src="/assets/about/ceo2.jpeg"
              alt="Leader 1"
              width={400}
              height={200}
              className="w-80 h-80 rounded-xl object-cover"
            />
            <h3 className="text-xl font-bold mt-2">Great Ejome</h3>
            <p className="text-gray-600">COO/Co-founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
