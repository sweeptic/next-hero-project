'use server';

import { signOut } from '@/utils/auth';

export async function signOutServer() {
  return signOut();
}
