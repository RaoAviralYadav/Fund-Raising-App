'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 px-4 py-3 fixed top-0 shadow-md bg-white text-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Title + Nav Links */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-bold">
            Fund Raiser
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>

            <div className="relative group">
              <button className="hover:underline">Community ▼</button>
              <div className="absolute hidden group-hover:block mt-1 shadow-md rounded bg-gray-100 text-black">
                <Link href="/volunteers" className="block px-4 py-2 hover:bg-gray-200">
                  Volunteers
                </Link>
                <Link href="/events" className="block px-4 py-2 hover:bg-gray-200">
                  Events
                </Link>
                <div className="border-t border-gray-300"></div>
                <Link href="/partners" className="block px-4 py-2 hover:bg-gray-200">
                  Partners
                </Link>
              </div>
            </div>

            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Search */}
        <div className="flex items-center space-x-2">
          <form className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 rounded border border-gray-400 focus:outline-none focus:ring"
            />
            <button
              type="submit"
              className="px-2 py-1 border rounded border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition"
            >
              Search
            </button>
          </form>

          {/* Mobile Toggle */}
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
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block hover:underline">
            Home
          </Link>
          <Link href="/about" className="block hover:underline">
            About
          </Link>
          <Link href="/community" className="block hover:underline">
            Community
          </Link>
          <Link href="/contact" className="block hover:underline">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
