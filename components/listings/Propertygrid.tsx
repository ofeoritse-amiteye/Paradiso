// components/listings/PropertyGrid.tsx
import PropertyCard from "./Propertycard";
import { Listing } from "@/data/mockListings";

interface PropertyGridProps {
  listings: Listing[];
}

export default function PropertyGrid({ listings }: PropertyGridProps) {
  if (!listings.length) {
    return (
      <p className="text-gray-600">
        No homes match your filters.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <PropertyCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
