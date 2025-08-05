'use client';
import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

export default function SubmitGoalPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');
  const [message, setMessage] = useState('');
  const user = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return setMessage('Please login first.');

    const token = await user.getIdToken();

    const res = await fetch('http://localhost:5000/submit-goal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, points: Number(points) }),
    });

    const data = await res.json();
    setMessage(data.message || 'Goal submitted!');
    setTitle('');
    setDescription('');
    setPoints('');
  };

  return (
    <DashboardLayout>
      {/* Page Heading */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg shadow mb-6">
        <h1 className="text-3xl font-bold text-orange-800 mb-2">
          Submit a Fundraising Goal
        </h1>
        <p className="text-gray-700">
          Log your contribution and climb the leaderboard!
        </p>
      </section>

      {/* Submit Form Card */}
      <div className="bg-white border border-gray-200 rounded-lg shadow p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-black mb-4">Goal Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Goal Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300 transition"
            required
          />
          <textarea
            placeholder="Goal Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300 transition"
            rows={4}
            required
          />
          <input
            type="number"
            placeholder="Points Earned"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300 transition"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition font-semibold shadow"
          >
            Submit Goal
          </button>
          {message && (
            <p className="text-green-600 text-center font-medium mt-2">{message}</p>
          )}
        </form>
      </div>
    </DashboardLayout>
  );
}


