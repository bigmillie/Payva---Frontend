"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Button from "./Button";

interface WaitlistPopupProps {
  open: boolean;
  onClose: () => void;
}

const WaitlistPopup = ({ open, onClose }: WaitlistPopupProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to save waitlist");

      setIsSuccess(true);
      setEmail("");
      setName("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 md:p-8">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close waitlist popup"
          disabled={isSubmitting}
        >
          <X size={22} />
        </button>

        {/* Content */}
        <div className="flex flex-col gap-4 text-center">
          {!isSuccess ? (
            <>
              <h3 className="text-xl font-bold text-[#09253F]">
                Join the Payva Waitlist
              </h3>

              <p className="text-sm text-gray-600">
                Be the first to know when Payva launches. Early access, updates,
                and exclusive perks.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 mt-2"
              >
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First name"
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#006D68] disabled:bg-gray-100"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#006D68] disabled:bg-gray-100"
                />

                <Button
                  type="submit"
                  className="w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>

              <p className="text-xs text-gray-400">
                We respect your privacy. No spam.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold text-[#09253F]">
                You’re on the list 🎉
              </h3>

              <p className="text-sm text-gray-600">
                Thanks for joining the Payva waitlist. We’ll notify you as soon
                as we launch.
              </p>

              <Button
                onClick={handleClose}
                className="w-full justify-center mt-2"
              >
                Close
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistPopup;
