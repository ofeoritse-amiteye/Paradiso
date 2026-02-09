// components/listings/PropertyGrid.js
import PropertyCard from "./Propertycard";

export default function PropertyGrid({ listings }) {
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
