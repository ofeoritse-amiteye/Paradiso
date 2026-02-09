export default function FeaturedAgents() {
    const agents = [
        {
            name: "Sarah Jenkins",
            title: "Premier Agent",
            brokerage: "Luxury Living Realty",
            rating: 5.0,
            reviews: 42,
            sold: 15,
            image: "/agent1.jpg" // Placeholder path, browser will ignore if missing or show alt
        },
        {
            name: "Michael Ross",
            title: "Listing Specialist",
            brokerage: "Ross & Co. Real Estate",
            rating: 4.9,
            reviews: 128,
            sold: 32,
            image: "/agent2.jpg"
        },
        {
            name: "David Chen",
            title: "Buyer's Agent",
            brokerage: "City Wide Homes",
            rating: 5.0,
            reviews: 19,
            sold: 8,
            image: "/agent3.jpg"
        },
        {
            name: "Emily Watson",
            title: "Relocation Expert",
            brokerage: "Watson Realty Group",
            rating: 4.8,
            reviews: 76,
            sold: 24,
            image: "/agent4.jpg"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-2">Top Rated Agents Near You</h2>
                        <p className="text-gray-600">Based on recent sales and customer reviews.</p>
                    </div>
                    <button className="text-blue-600 font-bold hover:underline hidden md:block">
                        View all agents &rarr;
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {agents.map((agent, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                {/* Fallback pattern if image fails */}
                                <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-300 bg-gray-100">
                                    👤
                                </div>
                                {/* We would use <Image /> here in prod but standard img is safer for varying placeholders */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg font-heading group-hover:text-blue-600 transition-colors">
                                        {agent.name}
                                    </h3>
                                    <div className="flex items-center bg-green-50 px-2 py-1 rounded text-xs font-bold text-green-700">
                                        ⭐ {agent.rating}
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500 mb-4">{agent.brokerage}</p>

                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 border-t border-gray-100 pt-4">
                                    <div>
                                        <span className="font-bold text-black">{agent.reviews}</span> Reviews
                                    </div>
                                    <div>
                                        <span className="font-bold text-black">{agent.sold}</span> Sales
                                    </div>
                                </div>

                                <button className="w-full border border-blue-600 text-blue-600 font-bold py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                                    Contact
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="text-blue-600 font-bold hover:underline">
                        View all agents &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
}
