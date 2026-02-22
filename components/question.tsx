"use client";

import { FAQ } from "./FAQ";
import { FAQs } from "@/constants/faqs";
import { useState } from "react";

export default function FAQSection() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const initialCount = 6;

  const handleShowTooltip = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const faqsToShow = showAll ? FAQs : FAQs.slice(0, initialCount);

  return (
    <div
      id="faq"
      className="w-full min-h-[60vh] "
      style={{ backgroundColor: "#06100A" }}
    >
      <div
        className="w-full max-w-[95%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 rounded-3xl px-6 py-12 lg:p-16 border"
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
        }}
      >
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start justify-start">
          <span
            className="font-bold rounded-full px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase mb-6"
            style={{
              color: "#C9A84C",
              border: "1px solid rgba(201,168,76,0.35)",
              background: "rgba(201,168,76,0.1)",
            }}
          >
            FAQ
          </span>

          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F0EBE1" }}
          >
            Frequently <span style={{ color: "#C9A84C" }}>Asked</span> Questions
          </h3>

          <p
            className="text-center lg:text-left text-lg leading-relaxed mb-8"
            style={{ color: "rgba(240,235,225,0.75)" }}
          >
            Find answers to common questions about buying, selling, and renting with Paradiso.
            Need more help? Reach out to our support team.
          </p>

          <div className="relative">
            <button
              onClick={handleShowTooltip}
              className="rounded-full px-8 py-3.5 font-bold text-sm tracking-wide transition-all hover:opacity-90"
              style={{
                background: "#C9A84C",
                color: "#06100A",
                boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              }}
            >
              Contact Support
            </button>
            {showTooltip && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10"
                style={{
                  background: "rgba(240,235,225,0.95)",
                  color: "#06100A",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                Sorry, this feature is under construction 🚧
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-stretch lg:items-end w-full lg:w-[50%]">
          {faqsToShow.map((val, index) => (
            <FAQ
              key={index}
              question={val.question}
              answer={val.answer}
              hidehr={index === faqsToShow.length - 1}
              animStyle={`anim-${(index % 4) + 1}`}
            />
          ))}

          {FAQs.length > initialCount && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-6 px-6 py-2.5 rounded-full text-sm font-medium self-center lg:self-start transition-all"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#F0EBE1",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              View More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
