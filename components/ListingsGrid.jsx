import ListingCard from "./ListingCard";

export default function ListingsGrid({ listings = [] }) {
  if (!listings.length) {
    return <div className="text-center py-10 text-gray-500">No listings found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
