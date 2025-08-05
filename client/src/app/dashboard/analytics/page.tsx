'use client';
import DashboardLayout from '../../../components/DashboardLayout';
import { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Bar } from 'react-chartjs-2';

interface Goal {
  title: string;
  description: string;
  points: number;
  date: string;
}

export default function AnalyticsPage() {
  const user = useAuth();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserGoals = async () => {
      if (!user) return;
      const token = await user.getIdToken();
      const res = await fetch('http://localhost:5000/user-goals', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setGoals(data.goals || []);
      setTotalPoints(data.totalPoints || 0);
      setLoading(false);
    };
    fetchUserGoals();
  }, [user]);

  return (
    <DashboardLayout>
      <section className="bg-gradient-to-r from-yellow-100 to-orange-200 p-6 rounded-lg shadow mb-6">
        <h1 className="text-3xl font-bold text-orange-900 mb-2">📊 Your Fundraising Analytics</h1>
        <p className="text-gray-700">
          Track your progress, crush your goals, and rise up that leaderboard!
        </p>
      </section>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-400">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">🎯 Goals Completed</h2>
              <p className="text-2xl font-bold text-orange-600">{goals.length}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-400">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">🏅 Total Points</h2>
              <p className="text-2xl font-bold text-yellow-600">{totalPoints}</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-black mb-3">📌 Recent Goals</h2>
          <ul className="space-y-3 mb-8">
            {goals.slice(0, 5).map((goal, i) => (
              <li key={i} className="p-4 bg-orange-50 border border-orange-200 rounded-lg shadow">
                <h3 className="text-lg font-bold text-orange-700">{goal.title}</h3>
                <p className="text-gray-700">{goal.description}</p>
                <p className="text-sm text-gray-500">
                  +{goal.points} points | {new Date(goal.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>

          {/* Future: Insert charts or graphs here if needed */}
        </>
      )}
    </DashboardLayout>
  );
}