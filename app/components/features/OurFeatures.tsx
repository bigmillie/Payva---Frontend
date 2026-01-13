import HeadingTag from "../commons/HeadingTag";
import Image from "next/image";
import { ourFeatures } from "@/utils/contents";
import Button from "../commons/Button";

const OurFeatures = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="px-6 md:px-12 py-24 space-y-16 max-w-7xl mx-auto font-famil">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-4">
          <HeadingTag>Our Features</HeadingTag>
          <h1 className="text-[#2A2A2A] font-famil text-xl md:text-5xl font-bold leading-tight">
            Your Money, Your Way—With Payva
          </h1>
        </div>

        {/* Features */}
        <div className="space-y-24">
          {ourFeatures.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={feature.title}
                className={`flex flex-col md:flex-row items-center gap-16 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    width={520}
                    height={520}
                    className="w-full max-w-md object-contain"
                  />
                </div>

                {/* Content */}
                <div className="w-full font-famil md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-[#2A2A2A]">
                    {feature.title}
                  </h2>

                  <p className="text-[#4F4F4F] leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[#4F4F4F]"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#00C2A8]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="text-sm shrink-0 px-5">
                    Submit Email
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
