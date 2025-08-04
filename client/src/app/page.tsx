import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white transition duration-500">
        <section className="flex items-center justify-center min-h-[80vh] text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
              Empower. Fundraise. Lead.
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Join the mission and make every effort count. Track goals, submit leads, and shine on the leaderboard.
            </p>
            <div className="space-x-4 mb-6">
              <Link href="/login">
                <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-6 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100 transition">
                  Register
                </button>
              </Link>
            </div>

            {/* Donate Button */}
            <div className="mt-4">
              <Link href="/donate">
                <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Scrollable Content Sections */}
        <section className="px-6 py-12 bg-white transition duration-500">
          <h2 className="text-3xl font-bold mb-4 text-center text-black">Why Fundraising Matters</h2>
          <p className="max-w-3xl mx-auto text-lg text-center mb-8 text-gray-700">
            Fundraising empowers change. It helps provide resources to those in need, supports causes that matter, and builds stronger communities.
            Your contribution, no matter how small, can spark hope and create real impact.
          </p>
        </section>

        <section className="px-6 py-12 bg-yellow-50 transition duration-500">
          <h2 className="text-3xl font-bold mb-4 text-center text-black">How It Helps</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded shadow bg-white">
              <h3 className="text-xl font-semibold mb-2 text-black">Support Communities</h3>
              <p className="text-gray-700">Funds raised go directly into empowering local initiatives and individuals.</p>
            </div>
            <div className="p-4 rounded shadow bg-white">
              <h3 className="text-xl font-semibold mb-2 text-black">Drive Innovation</h3>
              <p className="text-gray-700">Your support helps drive forward new solutions and impactful projects.</p>
            </div>
            <div className="p-4 rounded shadow bg-white">
              <h3 className="text-xl font-semibold mb-2 text-black">Be a Changemaker</h3>
              <p className="text-gray-700">Become part of a mission that’s larger than life — make your mark today.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 bg-white transition duration-500">
          <h2 className="text-3xl font-bold mb-4 text-center text-black">Get Involved</h2>
          <p className="max-w-3xl mx-auto text-lg text-center mb-8 text-gray-700">
            Ready to join the movement? Whether you’re fundraising, donating, or simply spreading the word — every action matters. Let’s create impact together.
          </p>
          <div className="text-center">
            <Link href="/register">
              <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Join Now
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
