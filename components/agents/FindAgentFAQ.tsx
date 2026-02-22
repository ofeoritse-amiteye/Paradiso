"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FindAgentFAQ() {
  const faqs: FAQItem[] = [
    {
      q: "Why should I use a real estate agent?",
      a: "Real estate agents are experts in the home buying and selling process. They have access to more listings, can negotiate on your behalf, and handle the complex paperwork involved in a transaction.",
    },
    {
      q: "How do I choose the right agent?",
      a: "Look for an agent with experience in your specific neighborhood and price range. Check their reviews, ask for references, and interview multiple agents to find someone you trust and communicate well with.",
    },
    {
      q: "How much does it cost to hire an agent?",
      a: "Typically, the seller pays the commission for both the buyer's and seller's agents. This fee is usually a percentage of the final sale price, often split between the two brokerages.",
    },
    {
      q: "What is the difference between a REALTOR® and a real estate agent?",
      a: "A real estate agent is licensed to help people buy and sell property. A REALTOR® is a member of the National Association of REALTORS® and is bound by a strict Code of Ethics.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24" style={{ backgroundColor: "#06100A" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-3xl font-bold font-heading mb-12 text-center"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F0EBE1" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${openIndex === index ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.08)"}`,
                boxShadow: openIndex === index ? "0 12px 40px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors"
                style={{
                  background: "transparent",
                  color: openIndex === index ? "#C9A84C" : "#F0EBE1",
                }}
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <span
                  className="flex-shrink-0 ml-4 transition-transform duration-300"
                  style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "rgba(240,235,225,0.7)" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="p-6 pt-0 leading-relaxed border-t"
                  style={{
                    color: "rgba(240,235,225,0.78)",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
