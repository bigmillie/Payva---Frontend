import Link from "next/link";

const MoreWays = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="px-4 md:px-12 pt-24 pb-32 max-w-7xl mx-auto font-famil">
        <h1 className="text-3xl md:text-5xl text-[#01070D] font-bold leading-[100%] tracking-[-2%]">
          More Ways to Reach Us
        </h1>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card */}
          <div className="bg-[#EBF2F6] p-8 md:p-12 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#2A2A2A] font-bold mb-4">
                Email Us
              </h2>
              <p className="text-[#4D4D4D] text-base">
                Prefer email? Drop us a message, and we&apos;ll get back to you
                as soon as possible:{" "}
                <Link
                  href="mailto:support@payvapayment.com"
                  className="text-[#006D68] font-bold"
                >
                  support@payvapayment.com
                </Link>
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#EBF2F6] p-8 md:p-12 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#2A2A2A] font-bold mb-4">
                Live 24/7 Chat
              </h2>
              <p className="text-[#4D4D4D] text-base">
                Have a question? Open the Payva app and start a chat with our
                support team at any time.{" "}
                <span className="font-bold text-[#006D68]">
                  We&apos;re ready to help, day or night.
                </span>
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#EBF2F6] p-8 md:p-12 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#2A2A2A] font-bold mb-4">
                WhatsApp Support
              </h2>
              <p className="text-[#4D4D4D] text-base">
                Message us directly on WhatsApp for quick and fast answers:{" "}
                <Link
                  href="https://wa.me/+23490666777890"
                  className="text-[#006D68] font-bold"
                >
                  +234 906-667-77890
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreWays;
