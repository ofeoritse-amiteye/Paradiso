"use client"
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
      className={`w-auto lg:w-[500px] ${
        hidehr ? "border-b-0" : "border-b"
      } border-[#B8C0CC] py-2 px-4 ${animStyle}`}
    >
      <button
        className="flex items-center justify-between w-full font-semibold text-sm text-black cursor-pointer py-3 hover:text-[#7D1BD2] text-start"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={isOpen ? "text-[#7D1BD2]" : ""}>
          {question}
        </span>

        {/* PLUS ICON */}
        <FiPlus
          className={`w-4 h-4 ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-45 text-[#7D1BD2]" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-[#323232] pb-3">
          {answer}
        </p>
      </div>
    </div>
  );
}
