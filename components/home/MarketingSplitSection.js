import Image from "next/image";
import Link from "next/link";

export default function MarketingSplitSection() {
  return (
    <section className="max-w-[1440px] mx-auto py-16 md:py-32 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">

        {/* TOP LEFT IMAGE */}
        <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden group">
          <Image
            src="/office.jpg"
            alt="Home loan"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
        </div>

        {/* TOP RIGHT CONTENT */}
        <div className="flex items-center justify-center px-8 py-16 md:py-0 md:px-16 lg:px-24 bg-gray-50/50">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-6 font-heading">
              Need a home loan? <br /> Get pre-approved
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Find a lender who can offer competitive mortgage rates and help you
              with pre-approval.
            </p>

            <Link
              href="/pre-approval"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
            >
              Get pre-approved now
            </Link>

            <div className="mt-8">
              <Link
                href="/advertising-disclosure"
                className="text-sm underline text-gray-500 hover:text-black transition-colors"
              >
                Advertising disclosure
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM LEFT CONTENT */}
        <div className="flex items-center justify-center px-8 py-16 md:py-0 md:px-16 lg:px-24 order-last md:order-none bg-gray-50/50">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-6 font-heading">
              Get Local Info
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Does it have pet-friendly rentals? How are the schools?
              Get important local information on the area you're most interested in.
            </p>

            {/* Search input */}
            <div className="flex items-center border border-gray-200 rounded-full p-2 max-w-sm bg-white shadow-sm focus-within:shadow-md focus-within:border-blue-500 transition-all duration-300">
              <div className="pl-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="San Francisco, CA"
                className="flex-1 outline-none text-base px-3 py-2 text-gray-700 placeholder:text-gray-400"
              />
              <button className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition shadow-md hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT IMAGE */}
        <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden group">
          <Image
            src="/father.jpg"
            alt="Family home"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
        </div>

      </div>
    </section>
  );
}
