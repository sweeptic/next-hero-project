import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import PostShow from '@/components/posts/post-show';
import { fetchCommentsByPostId } from '@/db/queries/comments';
import { paths } from '@/paths';
import Link from 'next/link';

export default async function PostShowPage({ params }: any) {
  const { slug, postId } = await params;
  console.log('PostShowPage', slug, postId);

  const comments = fetchCommentsByPostId;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>

      <PostShow postId={postId} />

      <CommentCreateForm postId={postId} startOpen />

      <CommentList postId={postId} />
    </div>
  );
}
