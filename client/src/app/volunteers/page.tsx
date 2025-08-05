'use client';
import Navbar from '../../components/Navbar';

export default function VolunteersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-gradient-to-b from-orange-100 via-yellow-50 to-white px-6">
        <section className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">💪 Meet Our Volunteers</h1>
          <p className="text-gray-700 text-lg mb-2">
            Volunteers are the heartbeat of our mission. They spread hope, manage events, and fuel every fundraiser.
          </p>
          <p className="text-gray-700 text-lg">
            Want to make a difference? Our next sign-up opens soon — stay tuned!
          </p>
        </section>

        {/* Volunteer Cards */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="bg-white p-4 rounded-lg shadow border border-orange-200 hover:shadow-lg transition"
            >
              <img
                src={`https://randomuser.me/api/portraits/${num % 2 === 0 ? 'women' : 'men'}/${num * 5}.jpg`}
                alt="Volunteer"
                className="rounded-full mx-auto mb-3 w-24 h-24 object-cover"
              />
              <h3 className="text-xl font-semibold text-orange-700 mb-1 text-center">
                Volunteer {num}
              </h3>
              <p className="text-gray-600 text-center">
                Dedicated to spreading change and making every campaign count.
              </p>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto bg-orange-100 p-6 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-orange-800 mb-3">👋 Want to Volunteer?</h2>
          <p className="text-gray-700 mb-4">
            We’re always looking for passionate souls. Join hands with us to create impact.
          </p>
          <button
            disabled
            className="bg-orange-500 text-white px-6 py-2 rounded shadow cursor-not-allowed opacity-70"
          >
            Sign-ups Opening Soon
          </button>
        </section>
      </main>
    </>
  );
}
