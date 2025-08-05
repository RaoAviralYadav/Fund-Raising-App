'use client';
import DashboardLayout from '../../../components/DashboardLayout';
import { useEffect, useState } from 'react';

interface UserData {
  uid: string;
  points: number;
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('http://localhost:5000/leaderboard');
        const data = await res.json();
        setLeaderboard(data.leaderboard || []);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <DashboardLayout>
      <section className="bg-gradient-to-r from-yellow-100 to-orange-200 p-6 rounded-lg shadow mb-6">
        <h1 className="text-3xl font-bold text-orange-900 mb-2">🏆 Leaderboard</h1>
        <p className="text-gray-700">
          Here are the top fundraisers crushing goals and stacking points!
        </p>
      </section>

      {loading ? (
        <p className="text-gray-600">Loading leaderboard...</p>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow">
          <table className="w-full table-auto border border-gray-200 rounded">
            <thead className="bg-orange-100">
              <tr>
                <th className="px-4 py-2 text-left text-orange-800 font-semibold border">Rank</th>
                <th className="px-4 py-2 text-left text-orange-800 font-semibold border">User ID</th>
                <th className="px-4 py-2 text-left text-orange-800 font-semibold border">Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, index) => (
                <tr key={user.uid} className="hover:bg-orange-50 transition">
                  <td className="px-4 py-2 border font-bold text-orange-700">
                    #{index + 1}
                  </td>
                  <td className="px-4 py-2 border text-gray-700">{user.uid}</td>
                  <td className="px-4 py-2 border text-green-600 font-semibold">
                    {user.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardLayout>
  );
}