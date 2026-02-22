"use client";

import { useState, ChangeEvent } from "react";

export default function MortgageCalculator() {
    const [homePrice, setHomePrice] = useState<number>(450000);
    const [downPayment, setDownPayment] = useState<number>(90000);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-4">Estimate your monthly payment</h2>
                    <p className="text-gray-600">See how your home price, down payment, and interest rate affect your payments.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Inputs */}
                        <div className="space-y-8">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Home Price</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                                    <input
                                        type="number"
                                        value={homePrice}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setHomePrice(Number(e.target.value))}
                                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl text-xl font-bold focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition outline-none"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="100000"
                                    max="2000000"
                                    step="1000"
                                    value={homePrice}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setHomePrice(Number(e.target.value))}
                                    className="w-full mt-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Down Payment (20%)</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                                    <input
                                        type="number"
                                        value={downPayment}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setDownPayment(Number(e.target.value))}
                                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl text-xl font-bold focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Loan Term</label>
                                    <select className="w-full px-4 py-4 border border-gray-300 rounded-xl text-lg font-medium outline-none focus:border-blue-600">
                                        <option>30-year fixed</option>
                                        <option>15-year fixed</option>
                                        <option>5/1 ARM</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Interest Rate</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            defaultValue="6.87"
                                            className="w-full px-4 py-4 border border-gray-300 rounded-xl text-lg font-medium outline-none focus:border-blue-600"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results Circle */}
                        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-8">
                            <div className="relative w-64 h-64 mb-8">
                                {/* Circle SVG */}
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="50%"
                                        cy="50%"
                                        r="45%"
                                        stroke="#e5e7eb"
                                        strokeWidth="20"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50%"
                                        cy="50%"
                                        r="45%"
                                        stroke="#2563eb"
                                        strokeWidth="20"
                                        fill="transparent"
                                        strokeDasharray="283"
                                        strokeDashoffset="75"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <p className="text-gray-500 font-medium mb-1">Monthly Payment</p>
                                    <p className="text-4xl font-bold font-heading text-blue-900">$2,865</p>
                                </div>
                            </div>

                            <div className="w-full space-y-3 max-w-sm">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                                        <span className="text-gray-600">Principal & Interest</span>
                                    </div>
                                    <span className="font-bold text-gray-900">$2,365</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                                        <span className="text-gray-600">Property Taxes</span>
                                    </div>
                                    <span className="font-bold text-gray-900">$350</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-purple-300"></span>
                                        <span className="text-gray-600">Homeowners Ins.</span>
                                    </div>
                                    <span className="font-bold text-gray-900">$150</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
