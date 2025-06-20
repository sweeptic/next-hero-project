'use server';

import { db } from '@/db';
import { paths } from '@/paths';
import { Topic } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createTopicSchema = z.object({
  username: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: 'Must be lowercase letters or dashes without spaces',
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    username?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
  console.log('stop...');
  await new Promise((resolve, rejected) => setTimeout(resolve, 2000));
  //
  await new Promise((resolve, rejected) => setTimeout(() => resolve, 1000));
  console.log('run');

  const result = createTopicSchema.safeParse({
    username: formData.get('username'),
    description: formData.get('description'),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  //   const session = await auth();

  //   if (!session || !session.user) {
  //     return {
  //       errors: {
  //         _form: ['You must be signed in to do this.'],
  //       },
  //     };
  //   }

  let topic: Topic;

  try {
    // throw new Error('failed.');

    console.log('CREATE DATA');

    topic = await db.topic.create({
      data: {
        slug: result.data.username,
        description: result.data.description,
      },
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
          _form: ['Something went wrong'],
        },
      };
    }
  }

  revalidatePath('/');
  redirect(paths.topicShow(topic.slug));
}
