'use server';

import { signOut } from '@/utils/GetSession';

export async function signOutServer() {
  return signOut();
}
