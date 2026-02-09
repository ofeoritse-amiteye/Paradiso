"use client";

export default function SellHero() {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center py-32 md:py-48 bg-cover bg-center"
      style={{ backgroundImage: "url('/house.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight drop-shadow-md">
          Get your home&apos;s value and see selling options
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 font-medium">
          Start your free home valuation estimate
        </p>

        <div className="bg-white p-2 rounded-full shadow-2xl flex flex-col sm:flex-row gap-2 w-full max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Enter your home address"
            className="flex-1 rounded-full px-6 py-4 text-base md:text-lg text-gray-800 outline-none placeholder:text-gray-500"
          />
          <button className="bg-[#D93025] hover:bg-[#b91e14] text-white font-bold text-lg px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-md">
            Get Estimate
          </button>
        </div>

      </div>
    </section>
  );
}
