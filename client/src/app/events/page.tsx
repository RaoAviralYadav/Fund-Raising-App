'use client';
import Navbar from '../../components/Navbar';

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 px-6 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 text-center">
            <h1 className="text-4xl font-bold text-yellow-700 mb-3">🌟 Upcoming Fundraising Events</h1>
            <p className="text-gray-700 mb-2">
              Join forces, spark impact, and raise funds through engaging events and campaigns.
            </p>
            <p className="text-gray-700">
              Whether online or offline — these events are your chance to make a difference!
            </p>
          </div>

          {/* Featured Event */}
          <div className="bg-orange-100 p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold text-orange-800 mb-2">📅 Featured Event: Digital Donation Drive</h2>
            <p className="text-gray-800 mb-2">
              📍 Online | 🕐 Aug 10 - Aug 20 | 🎯 Goal: $10,000
            </p>
            <p className="text-gray-700 mb-4">
              Help us reach more people by sharing, donating, or even volunteering during this 10-day digital drive. Every small effort counts!
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition">
              Donate Now
            </button>
          </div>

          {/* Event Cards */}
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">🎉 Other Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-yellow-700 mb-1">📦 Food Distribution Drive</h3>
              <p className="text-gray-700 mb-2">📍 Delhi NCR | 🗓️ Aug 15</p>
              <p className="text-gray-600 mb-3">
                Support our local teams in providing food kits to underprivileged families across the city.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                Volunteer
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-400">
              <h3 className="text-xl font-bold text-orange-700 mb-1">🎨 Art for a Cause Auction</h3>
              <p className="text-gray-700 mb-2">📍 Online | 🗓️ Aug 22</p>
              <p className="text-gray-600 mb-3">
                Bid on beautiful artwork donated by our community artists. All proceeds go to education funds.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded">
                View Gallery
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-orange-800 mb-2">Want to host an event?</h3>
            <p className="text-gray-700 mb-4">
              Reach out to us with your fundraising idea, and let’s make it happen together.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
