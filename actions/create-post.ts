'use server';

import { auth } from '@/utils/auth';

export async function createPost() {
  console.log('wait...');
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  console.log('done');

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to do this.'],
      },
    };
  }

  // TODO revalidate the topic show page
}
