'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 px-4 py-3 fixed top-0 shadow-lg bg-gradient-to-r from-orange-100 via-yellow-100 to-white text-black transition duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Title + Nav Links */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-2xl font-extrabold text-orange-600 hover:text-orange-700 transition">
            Fund Raiser 
          </Link>

          <div className="hidden md:flex items-center space-x-4 font-medium">
            <Link href="/" className="hover:text-orange-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-600 transition">
              About
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="hover:text-orange-600 transition">
                Community ▼
              </button>
              <div className="absolute hidden group-hover:block mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 z-50">
                <Link href="/volunteers" className="block px-4 py-2 hover:bg-orange-100 transition">Volunteers</Link>
                <Link href="/events" className="block px-4 py-2 hover:bg-orange-100 transition">Events</Link>
                <div className="border-t border-gray-300"></div>
                <Link href="/partners" className="block px-4 py-2 hover:bg-orange-100 transition">Partners</Link>
              </div>
            </div>

            <Link href="/contact" className="hover:text-orange-600 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Search + Mobile Toggle */}
        <div className="flex items-center space-x-2">
          <form className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-orange-200 transition"
            />
            <button
              type="submit"
              className="px-3 py-1 border rounded border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition"
            >
              Search
            </button>
          </form>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 focus:outline-none"
              aria-label="Toggle menu"
              title="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 pb-4 bg-white border-t border-gray-200 shadow">
          <Link href="/" className="block hover:text-orange-600 transition">
            Home
          </Link>
          <Link href="/about" className="block hover:text-orange-600 transition">
            About
          </Link>
          <Link href="/volunteers" className="block hover:text-orange-600 transition">
            Volunteers
          </Link>
          <Link href="/events" className="block hover:text-orange-600 transition">
            Events
          </Link>
          <Link href="/partners" className="block hover:text-orange-600 transition">
            Partners
          </Link>
          <Link href="/contact" className="block hover:text-orange-600 transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}


