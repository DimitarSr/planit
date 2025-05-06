'use client';


import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';

type AuthActionsProps = {
  variant?: 'header' | 'cta';
};

export default function AuthActions({ variant = 'header' }: AuthActionsProps) {
  const router = useRouter();
  const { user } = useUser();

  if (variant === 'header') {
    return (
      <div className="flex items-center gap-3 text-white text-sm">
        <SignedIn>
          {user && (
            <span className="hidden sm:inline font-medium">
              Welcome back,{' '}
              <span className="text-purple-300">{user.firstName}</span>
            </span>
          )}
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium text-sm shadow-md hover:opacity-90 transition-all duration-200">
              Вход
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-white text-[#1d1a2f] font-semibold px-6 py-3 rounded-md shadow hover:opacity-90 transition cursor-pointer">
              Get started
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <button
            onClick={() => router.push('/calendar')}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-md font-semibold shadow hover:opacity-90 transition cursor-pointer"
          >
            Go to Calendar
          </button>
        </SignedIn>
      </div>
    );
  }

  return null;
}
