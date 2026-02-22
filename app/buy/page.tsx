
"use client";
import { useState } from "react";
import SearchBar from "@/components/search/SearchBar";
import Filters from "@/components/Filters";
import ListingsGrid from "@/components/listings/ListingsGrid";
import { mockListings } from "@/data/mockListings";

export default function ListingsPage() {
  const [view, setView] = useState<"list" | "map">("list");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // Adjust as needed

  // Logic for displaying listings
  const indexOfLastListing = currentPage * itemsPerPage;
  const indexOfFirstListing = indexOfLastListing - itemsPerPage;
  const currentListings = mockListings.slice(indexOfFirstListing, indexOfLastListing);
  const totalPages = Math.ceil(mockListings.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">

      {/* Top Bar */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <SearchBar />
        <Filters view={view} setView={setView} />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-2">
        <h1 className="text-xl font-semibold">
          New listings for sale in Lagos, Nigeria
        </h1>
        <span className="text-sm underline cursor-pointer text-blue-600">
          How much home can I afford?
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-2 mb-6">
        {mockListings.length} Homes • Sort by <span className="font-medium">Newest listings</span>
      </p>

      {/* Content */}
      {view === "list" ? (
        <>
          <ListingsGrid listings={currentListings} />

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 gap-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>

              <span className="text-sm font-medium text-gray-700">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mt-10 h-[500px] border rounded-xl flex items-center justify-center bg-gray-50 text-gray-400">
          🗺️ Map view coming soon
        </div>
      )}
    </div>
  );
}
