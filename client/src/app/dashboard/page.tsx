'use client';

import DashboardLayout from '../../components/DashboardLayout';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

export default function DashboardHome() {
  const user = useAuth();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchPoints = async () => {
      if (!user) return;
      const token = await user.getIdToken();
      const res = await fetch('http://localhost:5000/user-points', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPoints(data.points || 0);
    };

    fetchPoints();
  }, [user]);

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg shadow mb-6">
        <h1 className="text-3xl font-bold text-orange-800 mb-2">
          Welcome Back{user?.displayName ? `, ${user.displayName}` : ''}!
        </h1>
        <p className="text-gray-700">
          Ready to crush your next goal and top the leaderboard?
        </p>
      </section>

      {/* Sexy User Info Card */}
      <div className="bg-white border border-orange-200 rounded-lg shadow-lg p-6 mb-6 flex flex-col md:flex-row items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">👤 Your Profile</h2>
          {user ? (
            <ul className="space-y-1 text-gray-700">
              <li>
                <span className="font-semibold text-orange-600">Name:</span>{' '}
                {user.displayName || 'N/A'}
              </li>
              <li>
                <span className="font-semibold text-orange-600">Email:</span>{' '}
                {user.email}
              </li>
              <li>
                <span className="font-semibold text-orange-600">Points:</span>{' '}
                {points}
              </li>
            </ul>
          ) : (
            <p className="text-gray-500">Loading user info...</p>
          )}
        </div>

        {/* Achievement Badge */}
        <div className="text-center">
          <div className="bg-orange-100 text-orange-800 font-bold px-4 py-2 rounded-full shadow">
            🏆 Rank Up & Earn More!
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/dashboard/submit">
          <div className="p-4 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition cursor-pointer">
            <h3 className="text-lg font-bold">Submit a New Goal</h3>
            <p className="text-sm">Log your latest achievement and earn points!</p>
          </div>
        </Link>

        <Link href="/dashboard/leaderboard">
          <div className="p-4 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition cursor-pointer">
            <h3 className="text-lg font-bold">View Leaderboard</h3>
            <p className="text-sm">See who’s ruling the fundraising game.</p>
          </div>
        </Link>
      </div>
    </DashboardLayout>
  );
}