"use client";
import { FiPlus } from "react-icons/fi";
import { FAQ } from "./FAQ";
import { FAQs } from "@/constants/faqs";
import { useState } from "react";

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const initialCount = 6;

  const handleShowTooltip = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const faqsToShow = showAll ? FAQs : FAQs.slice(0, initialCount);

  return (
    <div
      id="faq"
      className="w-full lg:min-h-[calc(100vh-120px)] h-auto px-4 md:px-8 py-12 box-border bg-[#F8F9FA]"
    >
      <div className="w-full h-auto lg:h-full bg-white flex flex-col md:flex-row items-start justify-between rounded-3xl px-6 py-12 lg:p-16 shadow-2xl border border-gray-100/50">
        <div className="w-full md:w-1/2 lg:w-[45%] box-border flex flex-col items-center md:items-start justify-start mb-10 md:mb-0">
          <span className="bg-blue-100 text-blue-700 font-bold rounded-full px-4 py-1 text-xs tracking-wide uppercase mb-6">
            FAQ
          </span>

          <h3 className="text-3xl md:text-5xl text-black font-bold text-center md:text-left font-heading leading-tight mb-6">
            Frequently <span className="text-blue-600">Asked</span> Questions
          </h3>

          <span className="text-gray-600 w-full text-center md:text-left text-lg leading-relaxed mb-8">
            Find answers to common questions about buying, selling, and renting with HomeFinder.
            If you need more help, feel free to reach out to our support team.
          </span>

          <div className="relative space-y-3 w-full flex flex-col items-center md:items-start">
            <button
              onClick={handleShowTooltip}
              className="bg-black text-white rounded-full px-10 py-4 font-bold hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Support
            </button>

            {showTooltip && (
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap z-10 transition-opacity duration-300 shadow-lg">
                Sorry, this feature is under construction 🚧
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end justify-start w-full md:w-1/2 lg:w-[50%]">
          {faqsToShow.map((val, index) => (
            <FAQ
              key={index}
              question={val.question}
              answer={val.answer}
              hidehr={index === faqsToShow.length - 1}
              animStyle={`anim-${(index % 4) + 1}`}
            />
          ))}

          {FAQs.length > initialCount && !showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="mt-6 px-6 py-2 bg-[#F0F0F0] text-black font-medium rounded-full text-sm hover:bg-[#E0E0E0] transition-colors self-center md:self-start"
            >
              View More
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
