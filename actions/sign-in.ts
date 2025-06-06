'use server';

import { signIn } from '@/utils/GetSession';

export async function signInGoogle() {
  return signIn('google');
}
