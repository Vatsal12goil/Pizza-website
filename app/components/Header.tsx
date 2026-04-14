'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-[#1a1a1a] shadow-md p-4 flex justify-between items-center">
      <nav className="space-x-6">
        <Link href="/dashboard" className="text-[#bf0000] font-semibold hover:text-red-700 transition">
          Dashboard
        </Link>
        <Link href="/orders" className="text-[#bf0000] font-semibold hover:text-red-700 transition">
          Pizza Orders
        </Link>
      </nav>

      {session && (
        <button
          onClick={() => signOut()}
          className="text-white bg-[#bf0000] hover:bg-red-700 border border-red-700 px-4 py-1 rounded transition text-sm font-medium"
        >
          Logout
        </button>
      )}
    </header>
  );
}
