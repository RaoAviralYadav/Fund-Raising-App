'use client';
import Link from 'next/link';
import { useState } from 'react';
import { registerUser } from '../../lib/auth';
import { useRouter } from 'next/navigation';
import { updateProfile } from 'firebase/auth';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await registerUser(email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });
      router.push('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl transition transform hover:scale-[1.01]">
        <h1 className="text-3xl font-extrabold mb-2 text-center text-orange-600">Join the Cause 🚀</h1>
        <p className="text-center text-gray-700 mb-6">Create your account and start making a difference today.</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200 transition"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200 transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200 transition"
            required
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition font-semibold shadow"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-orange-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
