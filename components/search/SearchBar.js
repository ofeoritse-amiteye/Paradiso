// components/search/SearchBar.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/listings?search=${encodeURIComponent(query)}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="
        w-full
        max-w-xl
        mx-auto
        bg-white
        border border-gray-200
        shadow-lg
        rounded-full
        p-2
        flex
        flex-row
        items-center
        gap-2
        sm:p-2
        sm:gap-3
      "
    >
      {/* INPUT */}
      <div className="flex items-center relative flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 absolute left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Address, city, ZIP..."
          className="
            w-full
            pl-10
            pr-4
            py-3
            text-sm
            text-gray-800
            placeholder:text-gray-500
            bg-transparent
            outline-none
          "
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          text-sm
          font-semibold
          px-6
          py-3
          rounded-full
          transition
          flex-shrink-0
          sm:w-auto
        "
      >
        Search
      </button>
    </form>
  );
}
