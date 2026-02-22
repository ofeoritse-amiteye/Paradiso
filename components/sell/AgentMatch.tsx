export default function AgentMatch() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="order-last lg:order-first relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src="/sell-agent.jpg"
            alt="Real Estate Agent"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-bold text-lg">Local Experts</p>
            <p className="text-sm opacity-90">Helping you sell faster</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading leading-tight">
            Find the perfect agent for your sale
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our network of trusted agents are experts in your local market. They will guide you through pricing, staging, and negotiating to get you the best deal.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Get a free home valuation and market analysis",
              "Access professional photography and staging advice",
              "Expert negotiation for the highest price",
              "Guidance through closing and paperwork"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Match with an agent
          </button>
        </div>

      </div>
    </section>
  );
}
