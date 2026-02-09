// src/app/page.js
import SearchBar from "@/components/search/SearchBar";

import ListingEntryCard from "@/components/navigation/ListingEntryCard";
import { listingEntryCards } from "@/data/listingEntryCards";
import DiscoverHelpSection from "@/components/home/DiscoverHelpSection";
import MarketingSplitSection from "@/components/home/MarketingSplitSection";
import FAQSection from "../components/question";
import FeaturedArticles from "@/components/FeaturedArticle";
export default function HomePage() {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section
        className="
    relative flex flex-col justify-center items-center text-center
    bg-cover bg-no-repeat
    bg-center sm:bg-top lg:bg-center
    min-h-[85vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[80vh]
    pt-20 pb-12
  "
        style={{ backgroundImage: "url('/house.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none"></div>



        {/* Hero content */}
        <div className="relative z-30 max-w-5xl mx-auto text-center text-white px-4">

          <h1
            className="
        text-2xl
        sm:text-3xl
        md:text-5xl
        lg:text-6xl
        font-semibold
        mb-4
        font-heading
        tracking-tight
        leading-tight
        drop-shadow-md
      "
          >
            The #1 site real estate
            <br className="hidden sm:block" />
            professionals trust*
          </h1>

          <p
            className="
        text-sm
        sm:text-base
        md:text-lg
        text-white/90
        mb-4
        max-w-xl
        mx-auto
        font-normal
      "
          >
            Discover your dream home with the most accurate listings and insights.
          </p>

          {/* Search Bar Wrapper */}
          <div className="w-full max-w-xl mx-auto">
            <SearchBar />
          </div>

        </div>
      </section>


      {/* FEATURED LISTINGS (OVERLAP SECTION) */}

      <section className="max-w-7xl mb-4 mt-4 mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 font-heading px-2">
          Browse homes in Lagos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listingEntryCards.map((card) => (
            <ListingEntryCard
              key={card.title}
              title={card.title}
              image={card.image}
              href={card.href}
            />
          ))}
        </div>
      </section>
      <DiscoverHelpSection />
      <FeaturedArticles />
      <MarketingSplitSection />
      <FAQSection />



    </main>
  );
}
