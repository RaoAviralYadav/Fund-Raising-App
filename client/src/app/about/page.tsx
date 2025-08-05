'use client';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 px-6 bg-gradient-to-b from-orange-50 via-yellow-50 to-white">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center mb-10">
          <h1 className="text-5xl font-bold text-orange-700 mb-4">🌟 About Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <strong>Fund Raiser</strong> isn’t just a platform — it’s a <span className="text-orange-600 font-semibold">movement of kindness</span>.  
            Empowering everyday people to create extraordinary change.
          </p>
        </section>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md mb-10">
          <p className="text-gray-700 text-lg mb-4">
            Whether it’s <span className="font-medium">education, healthcare, or social justice</span> — we provide tools to raise funds, build community, and change lives.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Powered by people, our platform turns small actions into massive impact. 
            When we give, we grow — together.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-orange-100 p-6 rounded-lg shadow border-l-4 border-orange-400">
            <h2 className="text-2xl font-bold text-orange-800 mb-2">🎯 Our Mission</h2>
            <p className="text-gray-700 text-lg">
              Make fundraising accessible, engaging, and impactful — one goal, one donation, one life at a time.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">🌍 Our Vision</h2>
            <p className="text-gray-700 text-lg">
              A world where kindness is a lifestyle. Where tech and humanity unite to craft a better tomorrow.
            </p>
          </div>
        </div>

        {/* How You Can Help */}
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-3xl font-bold text-orange-700 mb-4">🤝 How You Can Help</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li><span className="font-semibold">Donate</span> — Even the smallest gift can change a life.</li>
            <li><span className="font-semibold">Volunteer</span> — Join us, bring your passion, and make impact real.</li>
            <li><span className="font-semibold">Spread the Word</span> — Let generosity go viral. Share the mission.</li>
          </ul>
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center text-gray-600 mb-16">
          <p className="text-lg italic">“No one has ever become poor by giving.” — Anne Frank</p>
        </div>
      </main>
    </>
  );
}
