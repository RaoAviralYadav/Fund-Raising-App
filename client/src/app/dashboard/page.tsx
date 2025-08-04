'use client';

import DashboardLayout from '../../components/DashboardLayout';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';

export default function DashboardHome() {
  const user = useAuth();

  return (
    <DashboardLayout>
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg shadow mb-6">
        <h1 className="text-3xl font-bold text-orange-800 mb-2">
          Welcome Back{user?.displayName ? `, ${user.displayName}` : ''}!
        </h1>
        <p className="text-gray-700">
          Ready to crush your next goal and top the leaderboard?
        </p>
      </section>

      {/* User Info Card */}
      <div className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-semibold text-black mb-2">Your Profile</h2>
        {user ? (
          <>
            <p className="text-gray-600">
              Name: <span className="font-medium">{user.displayName || 'N/A'}</span>
            </p>
            <p className="text-gray-600">
              Email: {user.email}
            </p>
            <p className="text-gray-600">
              Points: <span className="font-semibold">0</span> {/* Placeholder */}
            </p>
          </>
        ) : (
          <p className="text-gray-500">Loading user info...</p>
        )}
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
