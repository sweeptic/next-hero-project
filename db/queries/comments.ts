import { db } from '@/db';
import { Comment } from '@prisma/client';
import { cache } from 'react';

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

// export type CommentWithAuthor = Awaited<ReturnType<typeof fetchPostsByTopicSlug>>[number];

export const fetchCommentsByPostId = cache((postId: string): Promise<CommentWithAuthor[]> => {
  console.log('call fetchCommentsByPostId');

  return db.comment.findMany({
    where: { postId: postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
});
