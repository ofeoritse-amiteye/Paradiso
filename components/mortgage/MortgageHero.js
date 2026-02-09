"use client";

export default function MortgageHero() {
    return (
        <section className="relative bg-[#1a47eb] text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
            {/* Background Pattern or Image */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                        Smart home buying starts here
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-lg leading-relaxed">
                        From checking today&apos;s rates to calculating your monthly payment, we have the tools you need.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1">
                            Check Today&apos;s Rates
                        </button>
                        <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                            Calculate Payment
                        </button>
                    </div>
                </div>

                <div className="hidden md:block relative">
                    {/* Abstract visual or illustration */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl transform rotate-2">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <p className="text-sm text-blue-200 uppercase tracking-wider mb-1">Current Avg Rate (30 Yr Fixed)</p>
                                <p className="text-5xl font-bold font-heading">6.87%</p>
                            </div>
                            <div className="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" /></svg>
                                0.05%
                            </div>
                        </div>
                        <div className="h-24 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg relative overflow-hidden flex items-end gap-2 px-2 pb-0">
                            {/* Mock chart bars */}
                            <div className="w-1/6 h-[60%] bg-blue-400/50 rounded-t-sm"></div>
                            <div className="w-1/6 h-[75%] bg-blue-400/60 rounded-t-sm"></div>
                            <div className="w-1/6 h-[65%] bg-blue-400/50 rounded-t-sm"></div>
                            <div className="w-1/6 h-[85%] bg-blue-400/70 rounded-t-sm"></div>
                            <div className="w-1/6 h-[80%] bg-blue-400/60 rounded-t-sm"></div>
                            <div className="w-1/6 h-[90%] bg-white rounded-t-sm shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
