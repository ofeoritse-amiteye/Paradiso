import Link from "next/link";

export default function LatestNews() {
    const articles = [
        {
            title: "10 Affordable Cities Where You Can Still Buy a Home for Under $300k",
            category: "Buying Tips",
            author: "Evan W.",
            date: "2 days ago",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
            excerpt: "These hidden gems offer great amenities without the big city price tag."
        },
        {
            title: "Inside Jennifer Lawrence's New $22M West Village Townhouse",
            category: "Celebrity Real Estate",
            author: "Elena R.",
            date: "4 hours ago",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
            excerpt: "The Oscar winner's new pad features a private garden and a wine cellar."
        },
        {
            title: "DIY Kitchen Upgrades That Add Value (Without Breaking the Bank)",
            category: "Design & Renovation",
            author: "Mike T.",
            date: "1 day ago",
            image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800",
            excerpt: "See how fresh hardware and a coat of paint can transform your space."
        },
        {
            title: "Mortgage Rates Dip to 6.1%: Is Now the Time to Refinance?",
            category: "Market Trends",
            author: "Sarah C.",
            date: "5 hours ago",
            image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&q=80&w=800",
            excerpt: "Analysts weigh in on the Fed's latest move and what it means for homeowners."
        },
        {
            title: "The Rise of Barndominiums: Why Everyone Wants a Barn Home",
            category: "Unique Homes",
            author: "Jessica M.",
            date: "3 days ago",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
            excerpt: "Rustic meets modern in this growing housing trend taking over rural America."
        },
        {
            title: "5 Staging Mistakes That Could Cost You Thousands",
            category: "Selling Advice",
            author: "David L.",
            date: "1 week ago",
            image: "https://images.unsplash.com/photo-1626127113110-3dba1c0451b0?auto=format&fit=crop&q=80&w=800",
            excerpt: "Avoid these common pitfalls when preparing your home for open houses."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {articles.map((article, i) => (
                        <div key={i} className="group cursor-pointer flex flex-col h-full">
                            {/* Image */}
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wide">
                                    {article.category}
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide">
                                    <span>{article.author}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 leading-snug group-hover:text-[#D93025] transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                                    {article.excerpt}
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-sm font-bold text-black underline underline-offset-4 decoration-gray-300 group-hover:decoration-[#D93025] transition-all"
                                >
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="border-2 border-black text-black font-bold py-3 px-10 rounded-full hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                        Load More Articles
                    </button>
                </div>

            </div>
        </section>
    );
}
