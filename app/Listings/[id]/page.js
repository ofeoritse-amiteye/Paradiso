"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mockListings } from "@/data/mockListings";
import { FiMapPin, FiHome, FiMaximize2, FiArrowLeft } from "react-icons/fi";

export default function ListingDetailsPage() {
    const { id } = useParams();
    const listing = mockListings.find((item) => item.id === parseInt(id));

    if (!listing) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
                <Link href="/" className="text-blue-600 hover:underline">
                    Go back home
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            {/* Breadcrumb / Back */}
            <div className="mb-6">
                <Link href="/buy" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition">
                    <FiArrowLeft className="mr-2" /> Back to Listings
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Left: Images */}
                <div className="space-y-4">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={listing.image}
                            alt={listing.address}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-sm font-bold rounded-full">
                            {listing.type}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Placeholders for gallery, reusing same image for now */}
                        <div className="relative h-40 rounded-xl overflow-hidden shadow-sm">
                            <Image src={listing.image} alt="" fill className="object-cover" />
                        </div>
                        <div className="relative h-40 rounded-xl overflow-hidden shadow-sm">
                            <Image src={listing.image} alt="" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Right: Details */}
                <div className="flex flex-col h-full">
                    <div className="mb-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            ${listing.price.toLocaleString()}
                        </h1>
                        <div className="flex items-center text-gray-600 text-lg mb-6">
                            <FiMapPin className="mr-2 text-blue-500" />
                            {listing.address}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-2xl font-bold text-gray-800">{listing.beds}</span>
                            <span className="text-sm text-gray-500 flex items-center mt-1"><FiHome className="mr-1" /> Beds</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center border-l border-r border-gray-200">
                            <span className="text-2xl font-bold text-gray-800">{listing.baths}</span>
                            <span className="text-sm text-gray-500 flex items-center mt-1"><FiHome className="mr-1" /> Baths</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-2xl font-bold text-gray-800">{listing.sqft}</span>
                            <span className="text-sm text-gray-500 flex items-center mt-1"><FiMaximize2 className="mr-1" /> Sq Ft</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-3">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Experience luxury living in this stunning property located in the heart of {listing.address.split(',')[1] || 'Lagos'}.
                            Featuring modern amenities, spacious interiors, and breathtaking views, this home is perfect for those seeking comfort and style.
                            Schedule a tour today to see everything this exceptional residence has to offer.
                        </p>
                    </div>

                    <div className="mt-auto flex gap-4">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Contact Agent
                        </button>
                        <button className="flex-1 bg-white border-2 border-gray-200 text-gray-800 font-bold py-4 rounded-xl hover:bg-gray-50 transition">
                            Schedule Tour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
