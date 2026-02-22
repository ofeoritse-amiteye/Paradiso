export default function LenderCTA() {
    return (
        <section className="bg-blue-900 py-24 relative overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                    Find a lender who competes for you
                </h2>
                <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Get pre-approved today to show sellers you're serious. Compare options from top-rated lenders.
                </p>
                <button className="bg-[#D93025] hover:bg-[#b91e14] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    Get Pre-Approved
                </button>
            </div>
        </section>
    );
}
