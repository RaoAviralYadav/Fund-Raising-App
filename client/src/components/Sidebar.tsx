'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Submit Goal', path: '/dashboard/submit' },
    { label: 'Analytics', path: '/dashboard/analytics' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-orange-100 p-4 shadow-md fixed top-0 left-0 pt-20">
      <h2 className="text-xl font-bold mb-6 text-black">Dashboard</h2>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-4 py-2 rounded transition ${
              pathname === item.path
                ? 'bg-orange-500 text-white'
                : 'text-black hover:bg-orange-200'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
