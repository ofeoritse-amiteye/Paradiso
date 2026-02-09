"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ListingCard({ listing }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="border rounded-xl overflow-hidden bg-white hover:shadow-lg transition group">
      <div className="relative aspect-[4/3] sm:aspect-[16/10]">
        <Link href={`/listings/${listing.id}`}>
          <Image
            src={listing.image}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
            alt={listing.address}
          />
        </Link>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setSaved(!saved)
          }}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition z-10"
        >
          {saved ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="p-4 space-y-1">
        <p className="text-green-600 text-l font-medium">● {listing.type}</p>

        <Link href={`/listings/${listing.id}`} className="block">
          <h3 className="text-2xl font-semibold hover:text-blue-600 transition">
            ${listing.price.toLocaleString()}
          </h3>
        </Link>

        <p className="text-l">
          {listing.beds} bed • {listing.baths} bath • {listing.sqft} sqft
        </p>

        <p className="text-sm text-gray-600 truncate">
          {listing.address}
        </p>

        <div className="flex justify-end">
          <button className="mt-3 border rounded-full px-4 py-2 text-l hover:bg-gray-100 transition">
            Email Agent
          </button>
        </div>

      </div>
    </div>
  );
}
