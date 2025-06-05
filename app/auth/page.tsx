'use client';

import { AuthGoogleButton } from '@/components/authButton';
import { title } from '@/components/primitives';

export default function AuthPage() {
  return (
    <div>
      <h1 className={title()}>Auth</h1>
      <div className="m-4 p-4 border-medium">
        <AuthGoogleButton />
      </div>
    </div>
  );
}
