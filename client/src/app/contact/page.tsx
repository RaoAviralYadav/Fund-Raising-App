'use client';
import Navbar from '../../components/Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 px-6 bg-gradient-to-b from-yellow-50 to-orange-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-orange-700 mb-4">📞 Contact Us</h1>
          <p className="text-gray-700 mb-4">
            Have questions? Suggestions? Or just want to say hello? We are always happy to connect.
          </p>

          <div className="mb-6">
            <p className="text-gray-700">
              📧 <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:support@fundraiser.com" className="text-orange-600 hover:underline">
                support@fundraiser.com
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              📞 <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+919876543210" className="hover:underline">
                +91-98765-43210
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              🏢 <span className="font-semibold">Address:</span> 123 Fundraiser Street, New Delhi, India
            </p>
          </div>

          <hr className="my-6 border-yellow-300" />

          <h2 className="text-2xl font-bold text-orange-600 mb-4">💌 Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        <footer className="text-center mt-12 text-gray-600 text-sm">
          &copy; 2025 Fundraiser Inc. | Built with ❤️ and ☕
        </footer>
      </main>
    </>
  );
}


// export default function ContactPage() {
//   return (
//     <main className="min-h-screen pt-20 px-6 bg-yellow-50">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold text-yellow-700 mb-4">Contact Us</h1>
//         <p className="text-gray-700 mb-4">
//           We’d love to hear from you! Whether you have questions, feedback, or partnership ideas —
//           we’re all ears.
//         </p>
//         <p className="text-gray-700">
//           📧 Email us at <span className="text-orange-600 font-semibold">support@fundraiser.com</span>
//         </p>
//         <p className="text-gray-700 mt-2">
//           📞 Phone: <span className="font-medium">+91-98765-43210</span>
//         </p>
//       </div>
//     </main>
//   );
// }
