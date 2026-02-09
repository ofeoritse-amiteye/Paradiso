"use client";

import { useState } from "react";

export default function AgentHero() {
    const [activeTab, setActiveTab] = useState("location"); // location or name

    return (
        <section
            className="relative flex flex-col justify-center items-center text-center py-20 md:py-32 bg-cover bg-center bg-gray-900"
            style={{ backgroundImage: "url('/meeting.jpg')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-white">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight drop-shadow-lg">
                    Find the perfect real estate agent
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                    Make your move with a local expert who knows the market.
                </p>

                {/* Search Container */}
                <div className="bg-white rounded-2xl p-4 shadow-2xl max-w-3xl mx-auto backdrop-blur-sm bg-opacity-95 text-black">

                    {/* Tabs */}
                    <div className="flex border-b border-gray-200 mb-4 pb-2 gap-6">
                        <button
                            onClick={() => setActiveTab("location")}
                            className={`font-semibold pb-2 border-b-2 transition-colors ${activeTab === "location" ? "border-black text-black" : "border-transparent text-gray-500 hover:text-black"}`}
                        >
                            Search by location
                        </button>
                        <button
                            onClick={() => setActiveTab("name")}
                            className={`font-semibold pb-2 border-b-2 transition-colors ${activeTab === "name" ? "border-black text-black" : "border-transparent text-gray-500 hover:text-black"}`}
                        >
                            Search by name
                        </button>
                    </div>

                    {/* Inputs */}
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder={activeTab === "location" ? "City, neighborhood, or ZIP code" : "Agent name (e.g. John Doe)"}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                            />
                        </div>
                        <button className="bg-[#D93025] hover:bg-[#b91e14] text-white font-bold px-8 py-3 rounded-lg transition shadow-md whitespace-nowrap">
                            Search Agents
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
