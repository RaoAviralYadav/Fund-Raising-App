'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DonatePage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate donation logic here...

    setShowThankYou(true);
  };

  // Auto-redirect to home after 3 seconds
  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou, router]);

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl transition transform hover:scale-[1.01] text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-orange-600">Make a Difference Today 💖</h1>
        <p className="text-lg mb-6 text-gray-700">
          Your donation fuels hope, supports change, and uplifts communities. Every rupee counts.
        </p>

        {!showThankYou ? (
          <>
            {/* Amount Selection */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[100, 500, 1000].map((amt) => (
                <button
                  key={amt}
                  className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition font-semibold shadow-sm"
                >
                  ₹{amt}
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom ₹"
                className="px-4 py-2 border border-gray-400 rounded w-32 focus:outline-none focus:ring focus:ring-orange-200 transition"
              />
            </div>

            {/* Donor Info Form */}
            <form onSubmit={handleDonate} className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200 transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200 transition"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-bold shadow-md"
              >
                Donate Now
              </button>
            </form>

            <Link href="/">
              <button className="text-sm text-gray-600 hover:underline">← Back to Home</button>
            </Link>
          </>
        ) : (
          // Thank You Message
          <div className="text-center p-4 animate-fade-in">
            <h2 className="text-3xl font-bold text-green-600 mb-2">Thank You! 🎉</h2>
            <p className="text-lg text-gray-700">
              Your donation has been received with gratitude.
            </p>
            <p className="text-sm text-gray-500 mt-2">Redirecting you to the homepage...</p>
          </div>
        )}
      </div>
    </main>
  );
}
