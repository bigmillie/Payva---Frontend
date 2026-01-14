"use client";

import { useState } from "react";
import Button from "./Button";

const ReadyToExperience = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;

    setIsSubmitting(true);
    setSubmitted(false);

    // ⏳ Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
    setEmail("");

    // Optional: hide success message after a while
    setTimeout(() => setSubmitted(false), 4000);
  };

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
          Ready to Experience Cross-Border Payments the Payva Way?
        </h1>

        <p className="text-white text-center text-sm md:text-base">
          Sign up and you&apos;ll be the first to know when the app is live
        </p>

        <div
          className="
            flex flex-row
            items-stretch md:items-center
            bg-white
            p-1
            rounded-lg
            gap-2
            w-full
            max-w-xl
          "
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="
              flex-1
              px-4
              py-3
              outline-none
              placeholder:text-slate-400
              text-[#006D68]
              rounded-md
            "
          />

          <Button
            className="text-sm md:px-5 py-3 w-auto"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Email"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToExperience;
