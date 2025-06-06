'use client';

import { useSession } from 'next-auth/react';
import SignInGoogleForm from './forms/sign-in-form';
import SignOutForm from './forms/sign-out-form';

export default function SessionInfo() {
  const session: any = useSession();
  const isSignedIn = !!session.data;

  return (
    <div>
      {isSignedIn ? (
        <div className="border-4 p-2 rounded-lg">
          <ul className="pb-4">
            <li>{session?.data.user?.name}</li>
            <li>{session?.data.user?.email}</li>
            <li>{session?.data.expires}</li>
          </ul>
          <SignOutForm />
        </div>
      ) : (
        <SignInGoogleForm />
      )}
      <div />
    </div>
  );
}
