"use client";
import { useState } from "react";
import Button from "../commons/Button";
import WaitlistPopup from "../commons/WaitlistPopup";

const ChoosePayva = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)] mx-4 md:mx-12 rounded-2xl md:rounded-4xl mb-12">
      <div className="flex font-famil flex-col gap-3 md:gap-5 items-center justify-center px-4 py-12 md:py-18 md:w-200 mx-auto">
        <h1 className="text-2xl md:text-5xl text-[#ffffff] text-center leading-[100%] tracking-[-2%] font-bold">
          Need Ease? <span className="text-[#99E1DD]">Choose Payva</span>
        </h1>
        <p className="text-sm md:text-base text-white text-center max-w-2xl">
          No matter the distance, Payva helps you show love—sending funds,
          paying bills, and receiving support for the people who matter most.
        </p>

        <div
          className="
            flex flex-row
            items-center justify-center
            mx-auto
            max-w-xl
          "
        >
          <Button
            className="text-sm md:px-5 py-3 w-auto"
            onClick={() => setShowWaitlist(true)}
          >
            Join the waitlist
          </Button>
        </div>
      </div>
      <WaitlistPopup
        open={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </section>
  );
};

export default ChoosePayva;
