'use client';

import { NavbarItem } from '@heroui/navbar';
import SignOutForm from './forms/sign-out-form';
import SignInGoogleForm from './forms/sign-in-form';
import { signOut, useSession } from 'next-auth/react';
import { Button } from '@heroui/button';

export default function NavbarAuth() {
  const session = useSession();

  const isSignedIn = !!session.data;

  return (
    <>
      <NavbarItem>
        {isSignedIn ? (
          <p>
            signed in as <strong>{session?.data?.user?.name}</strong>
          </p>
        ) : null}
      </NavbarItem>
      <NavbarItem>{isSignedIn ? <SignOutForm /> : <SignInGoogleForm />}</NavbarItem>
      <NavbarItem>
        <Button onPress={() => signOut()}>Sign out (client side)</Button>
      </NavbarItem>
    </>
  );
}
