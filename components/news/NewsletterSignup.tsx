"use client";
import { FormEvent } from "react";

export default function NewsletterSignup() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold font-heading mb-4">
                    Stay ahead of the market
                </h2>
                <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
                    Get the latest real estate news, market trends, and buying advice delivered straight to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-6 py-4 rounded-full border border-gray-300 outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                        required
                    />
                    <button className="bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition whitespace-nowrap shadow-lg">
                        Sign Up
                    </button>
                </form>

                <p className="text-xs text-gray-400 mt-6">
                    By signing up, you agree to our Terms of Service and Privacy Policy. You can unsubscribe at any time.
                </p>
            </div>
        </section>
    );
}
