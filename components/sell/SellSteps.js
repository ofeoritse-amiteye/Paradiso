export default function SellSteps() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Sell your home your way
          </h2>
          <p className="text-lg text-gray-600">
            We help you navigate the process, whether you want a quick cash offer or top dollar with an agent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              title: "Sell with an agent",
              text: "Partner with a local expert to market your home and negotiate the best price.",
              link: "Find an agent",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D93025]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: "Get a cash offer",
              text: "Skip the open houses and repairs. Get an offer in days and close on your timeline.",
              link: "Get an offer",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D93025]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Sell it yourself",
              text: "List your home on HomeFinder to reach millions of buyers without paying a listing fee.",
              link: "List for free",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D93025]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )
            }
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white">
              <div className="mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {item.text}
              </p>
              <a href="#" className="font-semibold text-[#D93025] hover:text-[#b91e14] inline-flex items-center group-hover:underline underline-offset-4">
                {item.link}
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
