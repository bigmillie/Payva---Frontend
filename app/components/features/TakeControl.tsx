"use client";

import { useState } from "react";
import Button from "../commons/Button";
import WaitlistPopup from "../commons/WaitlistPopup";

const TakeControl = () => {
  const [email, setEmail] = useState("");
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section
      id="waitlist"
      className="
        bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)]
        mx-2 md:mx-12
        rounded-2xl md:rounded-4xl
        mb-12
      "
    >
      <div
        className="
          flex flex-col
          gap-4 md:gap-6
          items-center
          justify-center
          py-14 md:py-18
          px-4
          max-w-4xl
          mx-auto
        "
      >
        <h1
          className="
            text-2xl md:text-5xl
            text-white
            text-center
            leading-tight md:leading-[100%]
            tracking-tight
            font-bold
            px-4
          "
        >
          Take Control of Your Money Today
        </h1>

        <p className="text-white text-center text-sm md:text-base max-w-lg">
          Join the waitlist and be the first to know when Payva launches.
          We&apos;re here to make cross-border transfers and bill and tuition
          fees payment simpler than ever.
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

export default TakeControl;
