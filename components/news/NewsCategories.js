"use client";

import { useState } from "react";

export default function NewsCategories() {
    const categories = [
        "All News",
        "Market Trends",
        "Celebrity Real Estate",
        "Design & Renovation",
        "Buying Tips",
        "Selling Advice",
        "Unique Homes"
    ];

    const [active, setActive] = useState("All News");

    return (
        <div className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
            <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
                <div className="flex gap-8 min-w-max">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(cat)}
                            className={`py-6 text-sm font-bold border-b-2 transition-all duration-300 ${active === cat
                                    ? "text-[#D93025] border-[#D93025]"
                                    : "text-gray-500 border-transparent hover:text-black"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
