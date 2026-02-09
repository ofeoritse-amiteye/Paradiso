"use client";

export default function MortgageRates() {
    const rates = [
        { type: "30-Year Fixed", rate: "6.87%", apr: "6.94%", trend: "up" },
        { type: "15-Year Fixed", rate: "6.12%", apr: "6.25%", trend: "down" },
        { type: "5/1 ARM", rate: "6.50%", apr: "7.10%", trend: "flat" },
        { type: "FHA 30-Year Fixed", rate: "6.25%", apr: "7.05%", trend: "up" },
        { type: "VA 30-Year Fixed", rate: "6.20%", apr: "6.45%", trend: "down" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold font-heading mb-8">Current Mortgage Rates</h2>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
                                    <th className="px-6 py-4 font-semibold">Loan Product</th>
                                    <th className="px-6 py-4 font-semibold">Interest Rate</th>
                                    <th className="px-6 py-4 font-semibold">APR</th>
                                    <th className="px-6 py-4 font-semibold text-right">Trend</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {rates.map((item, index) => (
                                    <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                                        <td className="px-6 py-5 font-bold text-gray-900">{item.type}</td>
                                        <td className="px-6 py-5 text-xl font-bold text-blue-600">{item.rate}</td>
                                        <td className="px-6 py-5 text-gray-600 font-medium">{item.apr}</td>
                                        <td className="px-6 py-5 text-right">
                                            {item.trend === "up" && <span className="text-red-500 text-sm font-bold">▲ +0.05%</span>}
                                            {item.trend === "down" && <span className="text-green-500 text-sm font-bold">▼ -0.03%</span>}
                                            {item.trend === "flat" && <span className="text-gray-400 text-sm font-bold">— 0.00%</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-center text-gray-500">
                        Rates are estimated and for informational purposes only. Actual rates depend on credit score and other factors.
                    </div>
                </div>
            </div>
        </section>
    );
}
