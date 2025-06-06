'use server';

import { signIn } from '@/utils/auth';

export async function signInGoogle() {
  return signIn('google');
}
