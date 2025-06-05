'use client';
import { Button } from '@heroui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { title } from './primitives';

export function AuthGoogleButton() {
  const { data: session } = useSession();

  console.log('session', session);

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className={title()}>Google</h1>
      {session ? `Signed in as ${session.user?.email}` : `Not signed in`}

      <br />
      {session ? (
        <Button onPress={() => signOut()}>Sign out</Button>
      ) : (
        <Button onPress={() => signIn()}>Sign in</Button>
      )}
    </div>
  );
}
