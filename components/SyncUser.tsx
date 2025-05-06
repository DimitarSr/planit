'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

export default function SyncUser() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isSignedIn || !user) return;

    fetch('/api/sync-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
      }),
    });
  }, [isSignedIn, user]);

  return null;
}
