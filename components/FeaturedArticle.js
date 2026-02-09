import Link from "next/link";

export default function FeaturedArticle() {
  return (
    <section
      className="relative h-[600px] w-full bg-center bg-cover flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/when.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 transition-opacity duration-300"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in-up">
        <div className="inline-block border border-white/50 text-white/90 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
          Unique Homes
        </div>

        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-10 drop-shadow-xl">
          Former President FDR&apos;s &apos;Favored&apos; Hunting Retreat Hits
          the Market in Hudson Valley for $1.6 Million:{" "}
          <span className="text-gray-300 font-light block mt-4 text-2xl md:text-4xl">
            &apos;A Masterwork of Craft&apos;
          </span>
        </h2>

        <Link
          href="/article/fdr-hunting-retreat"
          className="
            inline-block
            bg-white text-black px-10 py-4 rounded-full
            text-base md:text-lg font-bold
            hover:bg-blue-600 hover:text-white
            transition-all duration-300
            shadow-xl hover:shadow-2xl
            transform hover:-translate-y-1
          "
        >
          Read Article
        </Link>
      </div>
    </section>
  );
}
