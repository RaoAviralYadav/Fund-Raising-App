'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav
      className={`w-full z-50 px-4 py-3 fixed top-0 shadow-md transition duration-500 ${
        darkMode ? 'bg-black bg-opacity-80 text-white' : 'bg-white bg-opacity-80 text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Left: Navbar Title */}
        <Link href="/" className="text-xl font-bold">
          Fund Raiser
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle navigation menu"
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

        {/* Center: Navigation Links */}
        <div
          className={`w-full md:w-auto md:flex md:items-center justify-center space-y-2 md:space-y-0 md:space-x-4 ${
            isOpen ? 'block mt-2' : 'hidden md:block'
          }`}
        >
          <div className="flex justify-center space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="#" className="hover:underline">
              Link
            </Link>

            <div className="relative group">
              <button className="hover:underline">Dropdown ▼</button>
              <div
                className={`absolute hidden group-hover:block mt-1 shadow-md rounded ${
                  darkMode
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-black'
                }`}
              >
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Action
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Another action
                </Link>
                <div className="border-t border-gray-300 dark:border-gray-600"></div>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Something else here
                </Link>
              </div>
            </div>

            <span className="opacity-50 cursor-not-allowed">Disabled</span>
          </div>
        </div>

        {/* Right: Search + Toggle */}
        <div className={`mt-2 md:mt-0 flex items-center space-x-2`}>
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

          <button
            onClick={toggleDarkMode}
            className="px-2 py-1 border rounded border-gray-500 hover:bg-gray-500 hover:text-white transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}
