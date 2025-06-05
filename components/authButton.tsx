'use client';

import { Button } from '@heroui/button';
import { signIn, useSession } from 'next-auth/react';
import { title } from './primitives';

export function AuthGoogleButton() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className={title()}>Google</h1>

      <br />
      {session ? null : <Button onPress={() => signIn()}>Sign in</Button>}
    </div>
  );
}
