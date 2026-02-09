// components/listings/PropertyCard.js
import Image from "next/image";
import { Heart } from "lucide-react";

export default function PropertyCard({ listing }) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white hover:shadow-lg transition">
      <div className="relative h-48">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
        />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full">
          <Heart size={16} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">
          ${listing.price.toLocaleString()}
        </h3>
        <p className="text-sm text-gray-600">
          {listing.beds} bd • {listing.baths} ba • {listing.sqft} sqft
        </p>
        <p className="text-sm">{listing.address}</p>
      </div>
    </div>
  );
}
