import { Button } from '@heroui/button';
import * as actions from '@/actions';
import { auth } from '@/utils/GetSession';

export default async function AuthPage() {
  const session: any = await auth();

  const isSignedIn = !!session;

  return (
    <div>
      {isSignedIn ? (
        <ul className="bg-green-200">
          <li>{session?.user?.name}</li>
          <li>{session?.user?.email}</li>
          <li>{session?.expires}</li>
        </ul>
      ) : (
        'Signed Out'
      )}
      <div />
      <div className="flex flex-col gap-4 pt-3">
        <form action={actions.signInGoogle}>
          <Button type="submit" color="secondary" variant="bordered">
            Google Sign In
          </Button>
        </form>

        {isSignedIn ? (
          <form action={actions.signOutServer}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign Out
            </Button>
          </form>
        ) : null}
      </div>
    </div>
  );
}
