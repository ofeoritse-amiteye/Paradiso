interface Tool {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

export default function MortgageTools() {
    const tools: Tool[] = [
        {
            title: "Affordability Calculator",
            desc: "Calculate how much house you can afford based on your income and debts.",
            icon: "💰",
            color: "bg-green-50 text-green-600"
        },
        {
            title: "Rent vs. Buy",
            desc: "Compare the costs of renting versus buying a home over time.",
            icon: "⚖️",
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Refinance Calculator",
            desc: "See if refinancing your current mortgage could save you money.",
            icon: "📉",
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Amortization Schedule",
            desc: "View your loan payment schedule over the life of your loan.",
            icon: "📅",
            color: "bg-orange-50 text-orange-600"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold font-heading mb-10 text-center">More Mortgage Tools</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tools.map((tool, index) => (
                        <div key={index} className="group border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${tool.color} group-hover:scale-110 transition-transform`}>
                                {tool.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-blue-600 transition-colors">{tool.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-sm">{tool.desc}</p>
                            <button className="text-blue-600 font-bold text-sm uppercase tracking-wide flex items-center group-hover:underline underline-offset-4">
                                Use Tool
                                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
