import { paths } from '@/paths';
import Link from 'next/link';

export default async function PostShowPage({ params }: any) {
  const { slug, postId } = await params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>

      {/* <PostShow /> */}

      {/* <CommentCreateForm postId={postId} startOpen /> */}

      {/* <CommentList comments={comments} /> */}
    </div>
  );
}
