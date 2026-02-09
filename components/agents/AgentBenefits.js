export default function AgentBenefits() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-6">Why work with a HomeFinder agent?</h2>
                    <p className="text-gray-600 text-lg">
                        Whether you&apos;re buying or selling, a local expert can help you navigate the process with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Local Market Expertise",
                            desc: "Get the inside scoop on neighborhoods, schools, and local market trends from someone who lives there.",
                            image: "/benefit1.svg"
                        },
                        {
                            title: "Expert Negotiation",
                            desc: "Your agent will advocate for your best interests, helping you get the best price and terms possible.",
                            image: "/benefit2.svg"
                        },
                        {
                            title: "Seamless Process",
                            desc: "From paperwork to inspections, your agent handles the details so you can focus on your move.",
                            image: "/benefit3.svg"
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 mb-6 bg-blue-50 rounded-full flex items-center justify-center text-3xl transition-transform group-hover:scale-110 duration-300">
                                {/* Placeholder icons since we don't have the svgs yet, using emoji for now or simple shapes */}
                                {index === 0 && "🏘️"}
                                {index === 1 && "🤝"}
                                {index === 2 && "📋"}
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-heading">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

