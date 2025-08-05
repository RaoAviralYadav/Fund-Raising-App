'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useAuth } from '../hooks/useAuth';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuth();

  const navItems = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Submit Goal', path: '/dashboard/submit' },
    { label: 'Analytics', path: '/dashboard/analytics' },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/'); // Redirect to landing page
  };

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-orange-100 via-yellow-100 to-white p-4 shadow-lg fixed top-0 left-0 pt-20 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-orange-700 text-center">Fund Raiser</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-2 rounded-lg transition font-medium ${
                pathname === item.path
                  ? 'bg-orange-500 text-white shadow'
                  : 'text-gray-700 hover:bg-orange-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Logout Button at Bottom */}
      <div className="mb-4">
        {user && (
          <div className="text-sm text-gray-600 mb-2 px-2">
            Signed in as <span className="font-semibold">{user.email}</span>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}


// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Sidebar() {
//   const pathname = usePathname();

//   const navItems = [
//     { label: 'Home', path: '/dashboard' },
//     { label: 'Submit Goal', path: '/dashboard/submit' },
//     { label: 'Analytics', path: '/dashboard/analytics' },
//   ];

//   return (
//     <aside className="w-64 min-h-screen bg-orange-100 p-4 shadow-md fixed top-0 left-0 pt-20">
//       <h2 className="text-xl font-bold mb-6 text-black">Dashboard</h2>
//       <nav className="space-y-4">
//         {navItems.map((item) => (
//           <Link
//             key={item.path}
//             href={item.path}
//             className={`block px-4 py-2 rounded transition ${
//               pathname === item.path
//                 ? 'bg-orange-500 text-white'
//                 : 'text-black hover:bg-orange-200'
//             }`}
//           >
//             {item.label}
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }
