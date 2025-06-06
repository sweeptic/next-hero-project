import { title } from '@/components/primitives';
import { auth } from '@/utils/auth';

export default async function AboutPage() {
  const session = await auth();

  console.log('_________session', session);

  return (
    <div>
      <h1 className={title()}>About</h1>
      <p>Session object from server:</p>
      <ul>
        <li>name: {session?.user?.name}</li>
        <li>email: {session?.user?.email}</li>
        <li>image: {session?.user?.image}</li>
      </ul>
    </div>
  );
}
