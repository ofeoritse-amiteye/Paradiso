import Image from "next/image";
import Link from "next/link";

export default function ListingCard({ listing }) {
  return (
    <Link
      href={`/listings/${listing.id}`}
      className="border rounded-xl overflow-hidden hover:shadow-lg transition bg-white"
    >
      <div className="relative h-48">
        <Image
          src={listing.image}
          alt={listing.address}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <p className="text-lg font-semibold mb-1">{listing.price}</p>
        <p className="text-sm text-gray-600 mb-2">
          {listing.beds} bd • {listing.baths} ba
        </p>
        <p className="text-sm text-gray-700">
          {listing.address}
        </p>
      </div>
    </Link>
  );
}
