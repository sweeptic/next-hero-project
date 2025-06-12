'use server';

import { db } from '@/db';
import { paths } from '@/paths';
import { auth } from '@/utils/auth';
import { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(slug: any, formState: any, formData: any) {
  console.log('wait...', slug);
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  console.log('done');

  const title = formData.get('title');
  const content = formData.get('content');

    const session = await auth();
    
    console.log('session', session)
    

  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to do this.'],
      },
    };
  }

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

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title,
        content,
        userId: session.user.id,
        topicId: topic.id,
      } as any,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Failed to create post'],
        },
      };
    }
  }
  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));

  // TODO revalidate the topic show page
}
