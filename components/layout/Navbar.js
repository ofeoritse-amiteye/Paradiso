// components/layout/Navbar.js
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLink =
  "relative h-14 flex items-center px-1 text-black hover:text-black-600 transition after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full";

const mobileNavLink =
  "block px-4 py-3 text-lg font-medium text-black hover:bg-gray-50 hover:text-blue-600 rounded-md transition";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b relative z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Mobile Menu Button - Moved to Left */}
        <button
          className="lg:hidden p-2 text-black z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LEFT: Logo - Reverted to normal */}
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-0.5 font-bold text-xl text-blue-600 font-heading tracking-tight"
        >
          <Image
            src="/blue.svg"
            alt="FindMe logo"
            width={24}
            height={24}
            priority
          />
          <span>findme.com</span>
        </Link>


        {/* MIDDLE: Main navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/buy" className={navLink}>Buy</Link>
          <Link href="/rent" className={navLink}>Rent</Link>
          <Link href="/sell" className={navLink}>Sell</Link>
          <Link href="/mortgage" className={navLink}>Mortgage</Link>
          <Link href="/agents" className={navLink}>Find an Agent</Link>
          <Link href="/news" className={navLink}>News & Insights</Link>
        </div>

        {/* RIGHT: Secondary + Auth (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/rentals" className={navLink}>Manage rentals</Link>
          <Link href="/advertise" className={navLink}>Advertise</Link>

          <div className="flex items-center gap-4 ml-6">
            <Link href="/login" className={navLink}>Log in</Link>

            <Link
              href="/signup"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Sign up
            </Link>
          </div>
        </div>

      </div>

      {/* Mobile Menu Overlay - Slide from Left */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        style={{ top: "0", paddingTop: "80px" }}
      >
        <div className="flex flex-col px-6 space-y-2 h-full overflow-y-auto pb-10">

          {/* Logo in Menu Header */}
          <div className="flex items-center gap-2 mb-6 border-b pb-4">
            <Image
              src="/blue.svg"
              alt="FindMe logo"
              width={24}
              height={24}
            />
            <span className="font-bold text-xl text-blue-600 font-heading">findme.com</span>
          </div>

          <Link href="/buy" className={mobileNavLink} onClick={() => setIsMenuOpen(false)}>Buy</Link>
          <Link href="/rent" className={mobileNavLink} onClick={() => setIsMenuOpen(false)}>Rent</Link>
          <Link href="/sell" className={mobileNavLink} onClick={() => setIsMenuOpen(false)}>Sell</Link>
          <Link href="/mortgage" className={mobileNavLink} onClick={() => setIsMenuOpen(false)}>Mortgage</Link>
          <Link href="/agents" className={mobileNavLink} onClick={() => setIsMenuOpen(false)}>Find an Agent</Link>
          <Link href="/news" className={mobileNavLink} onClick={() => setIsMenuOpen(false)}>News & Insights</Link>

          <div className="h-px bg-gray-200 my-4"></div>

          <Link href="/rentals" className={mobileNavLink} onClick={() => setIsMenuOpen(false)}>Manage rentals</Link>
          <Link href="/advertise" className={mobileNavLink} onClick={() => setIsMenuOpen(false)}>Advertise</Link>

          <div className="h-px bg-gray-200 my-4"></div>

          <Link href="/login" className={mobileNavLink} onClick={() => setIsMenuOpen(false)}>Log in</Link>
          <Link href="/signup" className={`${mobileNavLink} text-blue-600 bg-blue-50`} onClick={() => setIsMenuOpen(false)}>Sign up</Link>
        </div>
      </div>
    </nav>
  );
}
