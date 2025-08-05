'use client';
import Navbar from '../../components/Navbar';

export default function PartnersPage() {
  const partners = [
    {
      name: 'Helping Hands Foundation',
      logo: '/partners/helpinghands.png', // Replace with actual logos
      description: 'Dedicated to community upliftment through grassroots initiatives and support programs.'
    },
    {
      name: 'EcoFuture Corp',
      logo: '/partners/ecofuture.png',
      description: 'Leading sustainable brand focused on climate action and eco-conscious fundraising.'
    },
    {
      name: 'BrightPath Education',
      logo: '/partners/brightpath.png',
      description: 'Empowering youth through accessible education and skill-building initiatives.'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-orange-700 mb-6">🤝 Our Partners</h1>
          <p className="text-gray-700 mb-4 text-lg">
            We collaborate with inspiring organizations and brands that believe in giving back. Their unwavering support fuels our mission to create meaningful change.
          </p>
          <p className="text-gray-700 mb-8 text-lg">
            Want to partner with us? Let’s create social impact together.
            <br />
            Contact us at: <span className="text-orange-600 font-semibold">partners@fundraiser.com</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-orange-100 rounded-lg p-4 flex items-center space-x-4 shadow hover:shadow-lg transition">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-orange-300 overflow-hidden">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-orange-800">{partner.name}</h2>
                  <p className="text-gray-700 text-sm">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-10 p-6 bg-yellow-100 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">Become a Partner</h2>
            <p className="text-gray-700 mb-4">
              Join us in making a difference. Your brand, your values, and your impact — amplified.
            </p>
            <a
              href="mailto:partners@fundraiser.com"
              className="inline-block px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
