"use client";

import { useState } from "react";
import Link from "next/link";
import { discoverHelpData } from "@/data/discoverHelpData";

type TabType = "buying" | "renting" | "selling";

export default function DiscoverHelpSection() {
  const [activeTab, setActiveTab] = useState<TabType>("buying");

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-8 text-center md:text-left font-heading">
        Discover how we can help
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
        {(["buying", "renting", "selling"] as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform
              ${activeTab === tab
                ? "bg-black text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black"
              }
            `}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {discoverHelpData[activeTab].map((item, index) => (
          <div
            key={index}
            className="group border border-gray-100 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1"
          >
            <div>
              <h3 className="font-bold text-xl mb-4 font-heading group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <Link
              href={item.href}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              {item.linkText}
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
