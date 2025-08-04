import Link from 'next/link';

export default function DonatePage() {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Make a Difference Today</h1>
        <p className="text-lg mb-6 text-gray-700">
          Your donation helps us reach more people, support vital causes, and drive real change. Choose an amount and support the mission.
        </p>

        {/* Amount Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[100, 500, 1000].map((amt) => (
            <button
              key={amt}
              className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition"
            >
              ₹{amt}
            </button>
          ))}
          <input
            type="number"
            placeholder="Custom ₹"
            className="px-4 py-2 border border-gray-400 rounded w-32 focus:outline-none focus:ring"
          />
        </div>

        {/* Donor Info Form */}
        <form className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            Donate Now
          </button>
        </form>

        <Link href="/">
          <button className="text-sm text-gray-600 hover:underline">Back to Home</button>
        </Link>
      </div>
    </main>
  );
}
