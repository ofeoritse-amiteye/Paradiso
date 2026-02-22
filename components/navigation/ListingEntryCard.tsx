import Link from "next/link";
import Image from "next/image";

interface ListingEntryCardProps {
  title: string;
  image: string;
  href: string;
}

export default function ListingEntryCard({ title, image, href }: ListingEntryCardProps) {
  return (
    <Link
      href={href}
      className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <h3 className="text-white text-2xl font-bold font-heading tracking-wide mb-1 transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        <div className="w-12 h-1 bg-white/80 rounded-full group-hover:w-20 transition-all duration-300"></div>
      </div>
    </Link>
  );
}
