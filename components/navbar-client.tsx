'use client';

import { NavbarItem } from '@heroui/navbar';
import SignOutForm from './forms/sign-out-form';
import SignInGoogleForm from './forms/sign-in-form';
import { useSession } from 'next-auth/react';

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
    </>
  );
}
