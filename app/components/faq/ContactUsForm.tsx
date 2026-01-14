"use client";

import { useState } from "react";

const ContactUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);

    // ⏳ Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Optional: reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="bg-[#EBF2F6] mx-4 md:mx-12 rounded-3xl md:rounded-4xl mb-12">
      <div className="md:p-12 flex flex-col md:flex-row items-start gap-10 md:gap-18">
        {/* Section Heading */}
        <div className="p-6 pb-2 md:p-0 flex flex-col gap-4 max-w-full md:max-w-md">
          <h1 className="text-[#01070D] font-famil text-3xl md:text-4xl font-bold leading-tight">
            Can&apos;t Find an Answer? Reach out to us.
          </h1>
          <p className="text-base md:text-lg text-[#4D4D4D]">
            Fill out the form with your details, and our team will reach out to
            assist you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-full md:max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="bg-[#C5D4E0] p-5 md:p-8 rounded-2xl md:rounded-3xl font-famil"
          >
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                required
                type="text"
                className="w-full px-4 md:px-5 py-3 bg-[#EBF2F6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#006D68]"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                required
                type="email"
                className="w-full px-4 md:px-5 py-3 bg-[#EBF2F6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#006D68]"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number <span className="text-gray-500">(optional)</span>
              </label>
              <input
                type="tel"
                className="w-full px-4 md:px-5 py-3 bg-[#EBF2F6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#006D68]"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Question Category
              </label>
              <select
                required
                className="w-full px-4 md:px-5 py-3 bg-[#EBF2F6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#006D68]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="account">Account Issues</option>
                <option value="transactions">Transaction Problems</option>
                <option value="technical">Technical Support</option>
                <option value="other">Other Inquiries</option>
              </select>
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Title
              </label>
              <input
                required
                type="text"
                className="w-full px-4 md:px-5 py-3 bg-[#EBF2F6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#006D68]"
                placeholder="Enter your question title"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 md:px-5 py-3 bg-[#EBF2F6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#006D68]"
                placeholder="Please be as detailed as possible so we can help you"
              />
            </div>

            {/* Success Message */}
            {submitted && (
              <p className="mb-4 text-sm text-[#006D68] font-semibold">
                Your message has been sent successfully. We&apos;ll get back to
                you shortly.
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-8 py-3 rounded-lg transition-colors ${
                isSubmitting
                  ? "bg-[#006D68]/60 cursor-not-allowed"
                  : "bg-[#006D68] hover:bg-[#005853]"
              } text-white`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
