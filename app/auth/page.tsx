'use client';

import { AuthGoogleButton } from '@/components/authButton';
import CredentialForm from '@/components/credentialsForm';
import { title } from '@/components/primitives';
import { Button } from '@heroui/button';
import { signOut, useSession } from 'next-auth/react';

export default function AuthPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className={title()}>Auth</h1>
      <div>{session ? `Signed in as ${session.user?.email}` : `Not signed in`}</div>

      <div className="m-4 p-4 border-medium">
        <AuthGoogleButton />
      </div>
      <div className="m-4 p-4 border-medium">
        <CredentialForm />
      </div>
      {session && (
        <div className="pt-4">
          <Button onPress={() => signOut()}>Sign out</Button>
        </div>
      )}
    </div>
  );
}
