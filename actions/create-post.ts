'use server';

import { db } from '@/db';
import { auth } from '@/utils/auth';

export async function createPost(slug: any) {
  console.log('wait...', slug);
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  console.log('done');

  const session = await auth();

  const topic = await db.topic.findFirst({
    where: {
      slug: slug,
    },
  });
    
    // console.log('find topic', topic);
    

  if (!topic) {
    return {
      errors: {
        _form: ['Cannot find topic'],
      },
    };
  }

  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to do this.'],
      },
    };
  }

  // TODO revalidate the topic show page
}
