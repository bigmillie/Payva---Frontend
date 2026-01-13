import React from "react";
import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";
import Button from "../commons/Button";

const AboutUs = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="px-6 md:px-12 pt-24 pb-32 flex items-start flex-col max-w-7xl mx-auto">
        <HeadingTag>About Us</HeadingTag>
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <Image
            src="/assets/about/about-banner.png"
            alt="Our Lens"
            width={700}
            height={420}
            className="h-full w-full md:w-1/2 flex-1 object-contain rounded-xl"
          />
          <div className="flex font-famil flex-col justify-between gap-6">
            <div className="p-4">
              <h2 className="text-3xl text-[#2A2A2A] font-bold mb-4">
                About Payva
              </h2>
              <p className="text-[#4D4D4D] text-base mb-4">
                Behind every transfer is someone showing up for family. Payva
                makes that easier. We help Nigerians home and abroad move money
                across the UK, Canada, and Nigeria with confidence—easier, more
                affordable, and with no worrying about delays or unclear rates.
              </p>
              <Button className="text-sm shrink-0 px-5">
                Join the waitlist
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-[#004F4C] p-12 font-famil rounded-xl flex-1 mt-20">
          <h2 className="text-3xl text-[#ffffff] font-bold mb-4">
            When sending money home stopped feeling safe, Payva was born
          </h2>
          <div className="space-y-6">
            <p className="text-[#E6F9F7] text-base">
              Many Nigerians abroad carry a steady sense of responsibility—the
              quiet duty to show up for the people who raised them and still
              count on them back home.
            </p>
            <p className="text-[#E6F9F7] text-base">
              When our founder moved abroad, he faced the same uphill battle
              countless immigrants know too well. Sending money back home or to
              Canada required far more effort than it should have. He needed to
              support his family, pay bills, and stay connected. The formal
              options were slow and expensive. The informal ones promised good
              rates but came with real fear—no protection, no guarantees, and no
              peace of mind until the money finally dropped.
            </p>
            <p className="text-[#E6F9F7] text-base">
              There were days he waited hours, refreshing Telegram chats, hoping
              the exchanger on the other end would release the funds. The rates
              kept shifting, the delays were frustrating, and the uncertainty
              never really went away. <br />
              Eventually, he realised this wasn&apos;t just his story. It was
              the story of millions of immigrants trying to support loved ones,
              build new lives, and manage their finances with dignity.
            </p>
            <p className="text-[#E6F9F7] text-base">
              Payva grew out of that frustration, but it&apos;s driven by
              something bigger: a promise that no one should have to risk their
              hard-earned money just to show up for family.
            </p>
            <p className="text-[#E6F9F7] text-base">
              What started as one person&apos;s struggle has become our
              mission—making cross-border payments feel local, simple, and
              trustworthy for every immigrant sending love back home.
            </p>
            <div className="bg-[#006D68] rounded-2xl p-4">
              <p className="text-[#E6F9F7] text-base">
                &quot;Payva is more than a product. It&apos;s a promise that
                what we went through, others shouldn&apos;t have to. We started
                from a personal struggle, but our mission is global: <br />
                <span className="text-[#99E1DD] text-xl font-medium italic">
                  To make international payments feel local, effortless, and
                  secure, no matter where home is.&quot;
                </span>
              </p>
              <p className="text-[#E6F9F7] text-lg text-end mt-4">
                Victor Ejome, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
