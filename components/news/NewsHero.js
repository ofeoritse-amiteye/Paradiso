"use client";

import Image from "next/image";
import Link from "next/link";

export default function NewsHero() {
    return (
        <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden group">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/living.jpg" // Placeholder
                    alt="Featured Article"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white max-w-5xl">
                <span className="bg-[#D93025] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                    Market Trends
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight drop-shadow-lg">
                    2026 Housing Market Forecast: Why Inventory Is Finally Bouncing Back
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed hidden md:block">
                    After years of tightness, experts predict a significant shift in housing availability. Here&apos;s what buyers need to know before stepping into the market this spring.
                </p>

                <div className="flex items-center gap-6">
                    <Link
                        href="/news/article-1"
                        className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
                    >
                        Read Full Story
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden relative border-2 border-white">
                            {/* Author placeholder */}
                            <div className="absolute inset-0 bg-gray-400"></div>
                        </div>
                        <div className="text-sm">
                            <p className="font-bold">By Sarah Connor</p>
                            <p className="text-gray-400">Mar 14, 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
