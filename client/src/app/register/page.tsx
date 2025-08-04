import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Register</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
