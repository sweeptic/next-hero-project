import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import PostShow from '@/components/posts/post-show';
import PostShowLoading from '@/components/posts/post-show-loading';
import { paths } from '@/paths';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function PostShowPage({ params }: any) {
  const { slug, postId } = await params;
  console.log('PostShowPage', slug, postId);

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>

      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>

      <CommentCreateForm postId={postId} startOpen />

      <CommentList postId={postId} />
    </div>
  );
}
