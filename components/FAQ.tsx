"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

interface Props {
  question: string;
  answer: string;
  hidehr: boolean;
  animStyle: string;
}

export function FAQ({ question, answer, hidehr, animStyle }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-auto lg:w-[500px] py-2 px-4 ${animStyle} ${
        hidehr ? "border-b-0" : "border-b"
      }`}
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <button
        className="flex items-center justify-between w-full font-semibold text-sm cursor-pointer py-3 text-start transition-colors"
        style={{ color: isOpen ? "#C9A84C" : "#F0EBE1" }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <FiPlus
          className="w-4 h-4 ml-2 flex-shrink-0 transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            color: isOpen ? "#C9A84C" : "rgba(240,235,225,0.6)",
          }}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm pb-3 leading-relaxed" style={{ color: "rgba(240,235,225,0.75)" }}>
          {answer}
        </p>
      </div>
    </div>
  );
}
