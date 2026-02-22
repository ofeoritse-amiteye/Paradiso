"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

export default function FindAgentFAQ() {
    const faqs: FAQ[] = [
        {
            q: "Why should I use a real estate agent?",
            a: "Real estate agents are experts in the home buying and selling process. They have access to more listings, can negotiate on your behalf, and handle the complex paperwork involved in a transaction."
        },
        {
            q: "How do I choose the right agent?",
            a: "Look for an agent with experience in your specific neighborhood and price range. Check their reviews, ask for references, and interview multiple agents to find someone you trust and communicate well with."
        },
        {
            q: "How much does it cost to hire an agent?",
            a: "Typically, the seller pays the commission for both the buyer's and seller's agents. This fee is usually a percentage of the final sale price, often split between the two brokerages."
        },
        {
            q: "What is the difference between a REALTOR® and a real estate agent?",
            a: "A real estate agent is licensed to help people buy and sell property. A REALTOR® is a member of the National Association of REALTORS® and is bound by a strict Code of Ethics."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold font-heading mb-12 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
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
