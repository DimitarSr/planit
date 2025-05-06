import Link from 'next/link';
import { SignedIn } from '@clerk/nextjs';
import AuthActions from './AuthActions';

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-[#1d1a2f] shadow-lg shadow-purple-800/10 flex items-center justify-between border-b border-white/5 relative">
      <Link
        href="/"
        className="text-white text-2xl font-extrabold tracking-wide hover:text-purple-400 transition"
      >
        <span className="text-purple-400">Plan</span>
        <span className="text-indigo-400">It</span>
      </Link>

      <SignedIn>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link
            href="/calendar"
            className="text-white text-lg font-semibold tracking-wider hover:text-purple-300 transition"
          >
            Calendar
          </Link>
        </div>
      </SignedIn>

      <AuthActions variant="header" />
    </header>
  );
}
