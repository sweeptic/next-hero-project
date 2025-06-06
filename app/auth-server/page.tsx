import { auth } from '@/utils/auth';
import SignOutForm from '@/components/forms/sign-out-form';
import SignInGoogleForm from '@/components/forms/sign-in-form';

export default async function AuthPage() {
  const session: any = await auth();

  const isSignedIn = !!session;

  return (
    <div>
      {isSignedIn ? (
        <div className="border-4 p-2 rounded-lg">
          <ul>
            <li>{session?.user?.name}</li>
            <li>{session?.user?.email}</li>
            <li>{session?.expires}</li>
          </ul>
        </div>
      ) : (
        'Signed Out'
      )}
      <div />
      <div className="flex flex-col gap-4 pt-3">{isSignedIn ? <SignOutForm /> : <SignInGoogleForm />}</div>
    </div>
  );
}
