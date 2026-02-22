// components/listings/PropertyFilters.tsx
"use client";

import { useState, ChangeEvent } from "react";
import { Listing } from "@/data/mockListings";

interface PropertyFiltersProps {
  listings: Listing[];
  setFiltered: (listings: Listing[]) => void;
}

export default function PropertyFilters({ listings, setFiltered }: PropertyFiltersProps) {
  const [price, setPrice] = useState<number>(1000000);
  const [beds, setBeds] = useState<string>("any");

  function applyFilters() {
    let result = listings.filter((home) => {
      return (
        home.price <= price &&
        (beds === "any" || home.beds >= Number(beds))
      );
    });

    setFiltered(result);
  }

  return (
    <aside className="bg-white p-4 rounded-lg border h-fit sticky top-20">
      <h2 className="font-semibold mb-4">Filters</h2>

      {/* Price */}
      <div className="mb-4">
        <label className="block text-sm mb-1">
          Max Price: ${price.toLocaleString()}
        </label>
        <input
          type="range"
          min="50000"
          max="1000000"
          step="50000"
          value={price}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Beds */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Bedrooms</label>
        <select
          value={beds}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setBeds(e.target.value)}
          className="w-full border rounded-md p-2"
        >
          <option value="any">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      <button
        onClick={applyFilters}
        className="w-full bg-blue-600 text-white py-2 rounded-md"
      >
        Apply Filters
      </button>
    </aside>
  );
}
