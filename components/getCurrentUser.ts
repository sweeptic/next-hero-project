import { db } from '@/db';
import { authOptions } from '@/utils/GetSession';
import { getServerSession } from 'next-auth';

export const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return;
    const currentUser = await db.user.findUnique({
      where: { email: session.user.email },
    });
    if (!currentUser) return;
    return currentUser;
  } catch (e: any) {
    // simply ignores if no user is logged in
    return;
  }
};
