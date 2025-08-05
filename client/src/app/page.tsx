import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white transition duration-500">
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-[80vh] text-center px-4 relative overflow-hidden">
          {/* Soft animated background icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 text-orange-200 text-[15rem] select-none pointer-events-none z-0 animate-pulse">
            💰
          </div>

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-orange-700 drop-shadow">
              Raise Funds. Empower Lives.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 font-medium">
              Track your goals. Inspire generosity. Make impact visible — one donation at a time.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href="/login">
                <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition shadow-lg">
                  Login (Interns/Volunteers)
                </button>
              </Link>
              <Link href="/register">
                <button className="px-6 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100 transition shadow">
                  Register (Volunteer)
                </button>
              </Link>
            </div>

            {/* Donate Button */}
            <div className="mt-4">
              <Link href="/donate">
                <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition shadow-lg">
                  Donate Now 💖
                </button>
              </Link>
            </div>
          </div>
        </section>


        {/* Why Fundraising Matters */}
        <section className="px-6 py-12 bg-white transition duration-500">
          <h2 className="text-4xl font-bold mb-6 text-center text-orange-700">Why Fundraising Matters</h2>
          <p className="max-w-3xl mx-auto text-lg text-center mb-10 text-gray-700">
            Fundraising empowers change. It provides resources to those in need, supports causes that matter, and builds stronger communities. Your contribution, no matter how small, sparks real impact.
          </p>
        </section>

        {/* How It Helps */}
        <section className="px-6 py-12 bg-yellow-50 transition duration-500">
          <h2 className="text-4xl font-bold mb-6 text-center text-orange-700">How It Helps</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg shadow-lg bg-white border-t-4 border-orange-400">
              <h3 className="text-xl font-semibold mb-2 text-black">Support Communities</h3>
              <p className="text-gray-700">Funds raised directly empower local initiatives and individuals in need.</p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-white border-t-4 border-orange-400">
              <h3 className="text-xl font-semibold mb-2 text-black">Drive Innovation</h3>
              <p className="text-gray-700">Help drive forward new solutions and impactful social projects.</p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-white border-t-4 border-orange-400">
              <h3 className="text-xl font-semibold mb-2 text-black">Be a Changemaker</h3>
              <p className="text-gray-700">Join a mission larger than life — make your mark today.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-12 bg-white transition duration-500">
          <h2 className="text-4xl font-bold mb-6 text-center text-orange-700">Get Involved</h2>
          <p className="max-w-3xl mx-auto text-lg text-center mb-8 text-gray-700">
            Ready to join the movement? Whether you’re fundraising, donating, or simply spreading the word — every action matters. Let’s create impact together.
          </p>
          <div className="text-center">
            <Link href="/register">
              <button className="px-8 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition shadow-lg text-lg font-medium">
                Join Now
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
