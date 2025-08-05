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
      <h1 className="text-2xl font-bold text-black mb-4">Submit a New Goal</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          rows={4}
          required
        />
        <input
          type="number"
          placeholder="Points Earned"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Submit Goal
        </button>
        {message && <p className="text-green-600">{message}</p>}
      </form>
    </DashboardLayout>
  );
}
