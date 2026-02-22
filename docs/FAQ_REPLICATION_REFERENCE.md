# FAQ Content & Structure – Replication Reference

Use this file on another branch to replicate the Frequently Asked Questions. Below are all FAQ sources, their content, and where they are used.

---

## 1. Main site FAQs (`constants/faqs.js`)

**File to create/ensure exists:** `constants/faqs.js`

```javascript
export const FAQs = [
  {
    question: "How do I search for a home in Lagos?",
    answer:
      "Simply enter your desired neighborhood (e.g., Lekki, Ikeja) in the search bar on our homepage to view available listings for sale or rent.",
  },
  {
    question: "Can I schedule a physical tour?",
    answer:
      "Yes! Once you find a property you like, click 'Contact Agent' to arrange a convenient time for a physical inspection.",
  },
  {
    question: "What documents do I need to rent a specific apartment?",
    answer:
      "Typically, you'll need a valid ID, proof of income or employment, and sometimes a reference letter. Specific requirements vary by landlord.",
  },
  {
    question: "Are the listing prices negotiable?",
    answer:
      "In many cases, yes. You can make an offer through the agent listed on the property page, and they will negotiate with the landlord or seller on your behalf.",
  },
  {
    question: "How do I verify if a property is genuine?",
    answer:
      "We verify our partner agents, but we always recommend conducting a physical inspection and verifying documents (like C of O or Governor's Consent) before making any payments.",
  },
  {
    question: "Can I list my own property here?",
    answer:
      "Absolutely. Navigate to the 'Sell' or 'Advertise' section to create a listing and reach thousands of potential buyers and renters in Lagos.",
  },
];
```

**Used by:** `components/question.js` (FAQSection) which imports `FAQs` from `@/constants/faqs` and renders each with `components/FAQ.tsx`.

---

## 2. FAQ accordion component (`components/FAQ.tsx`)

**File:** `components/FAQ.tsx`

- **Props:** `question`, `answer`, `hidehr`, `animStyle`
- **Behavior:** Client component; expand/collapse with `FiPlus` icon (rotate 45° when open). Border bottom unless `hidehr`. Purple accent `#7D1BD2` when open.
- **Dependencies:** `react-icons/fi` (FiPlus)

Use the existing `FAQ.tsx` implementation or re-create with the same props and behavior.

---

## 3. FAQ section wrapper (`components/question.js`)

**File:** `components/question.js` (or `FAQSection.js`)

- Renders a full-width FAQ section with:
  - Left: “FAQ” pill, heading “Frequently **Asked** Questions”, short intro about HomeFinder, “Contact Support” button (tooltip: “Sorry, this feature is under construction”).
  - Right: List of `<FAQ>` items from `FAQs` (show first 6, then “View More” to show all).
- Imports: `FAQ` from `./FAQ`, `FAQs` from `@/constants/faqs`.
- Needs `"use client"` if it uses `useState` (showAll, showTooltip).

---

## 4. Find Agent page FAQs (`components/agents/FindAgentFAQ.js`)

**File:** `components/agents/FindAgentFAQ.js`

**Inline FAQ data (copy this):**

| # | Question | Answer |
|---|----------|--------|
| 1 | Why should I use a real estate agent? | Real estate agents are experts in the home buying and selling process. They have access to more listings, can negotiate on your behalf, and handle the complex paperwork involved in a transaction. |
| 2 | How do I choose the right agent? | Look for an agent with experience in your specific neighborhood and price range. Check their reviews, ask for references, and interview multiple agents to find someone you trust and communicate well with. |
| 3 | How much does it cost to hire an agent? | Typically, the seller pays the commission for both the buyer's and seller's agents. This fee is usually a percentage of the final sale price, often split between the two brokerages. |
| 4 | What is the difference between a REALTOR® and a real estate agent? | A real estate agent is licensed to help people buy and sell property. A REALTOR® is a member of the National Association of REALTORS® and is bound by a strict Code of Ethics. |

**Structure in code:**

```javascript
const faqs = [
  { q: "Why should I use a real estate agent?", a: "Real estate agents are experts in the home buying and selling process. They have access to more listings, can negotiate on your behalf, and handle the complex paperwork involved in a transaction." },
  { q: "How do I choose the right agent?", a: "Look for an agent with experience in your specific neighborhood and price range. Check their reviews, ask for references, and interview multiple agents to find someone you trust and communicate well with." },
  { q: "How much does it cost to hire an agent?", a: "Typically, the seller pays the commission for both the buyer's and seller's agents. This fee is usually a percentage of the final sale price, often split between the two brokerages." },
  { q: "What is the difference between a REALTOR® and a real estate agent?", a: "A real estate agent is licensed to help people buy and sell property. A REALTOR® is a member of the National Association of REALTORS® and is bound by a strict Code of Ethics." }
];
```

**Behavior:** Section with heading “Frequently Asked Questions”, accordion per item (`openIndex` state), chevron icon, bordered cards. Client component (`"use client"`).

**Full component code** (for `components/agents/FindAgentFAQ.js` or `.tsx`):

```jsx
"use client";

import { useState } from "react";

export default function FindAgentFAQ() {
    const faqs = [
        { q: "Why should I use a real estate agent?", a: "Real estate agents are experts in the home buying and selling process. They have access to more listings, can negotiate on your behalf, and handle the complex paperwork involved in a transaction." },
        { q: "How do I choose the right agent?", a: "Look for an agent with experience in your specific neighborhood and price range. Check their reviews, ask for references, and interview multiple agents to find someone you trust and communicate well with." },
        { q: "How much does it cost to hire an agent?", a: "Typically, the seller pays the commission for both the buyer's and seller's agents. This fee is usually a percentage of the final sale price, often split between the two brokerages." },
        { q: "What is the difference between a REALTOR® and a real estate agent?", a: "A real estate agent is licensed to help people buy and sell property. A REALTOR® is a member of the National Association of REALTORS® and is bound by a strict Code of Ethics." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
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
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
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
```

---

## 5. Where each FAQ appears

| FAQ source | Used in / Route |
|------------|------------------|
| `constants/faqs.js` + `FAQ.tsx` + `question.js` | Home / main page (if FAQSection is included) |
| `FindAgentFAQ.js` | Agents page (`app/agents/`) |

---

## 6. Quick checklist for the other branch

1. **Main FAQs**
   - [ ] Create or restore `constants/faqs.js` with the 6 Q&A pairs above.
   - [ ] Ensure `components/FAQ.tsx` exists (accordion with question, answer, hidehr, animStyle).
   - [ ] Ensure `components/question.js` (FAQSection) exists and imports `FAQs` and `FAQ`; wire it into the page where you want the main FAQ block.

2. **Agents page FAQs**
   - [ ] Create or restore `components/agents/FindAgentFAQ.js` with the 4 Q&A pairs and accordion UI.
   - [ ] Add `<FindAgentFAQ />` (or equivalent) to the agents page layout.

3. **Dependencies**
   - [ ] `react-icons` (for `FiPlus` in `FAQ.tsx`) if you use that component.

---

*Generated as a replication reference for the FAQ implementation on this branch.*
