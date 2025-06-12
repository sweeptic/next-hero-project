import PostList from '@/components/posts/post-list';
import PostCreateForm from '@/components/posts/topic-create-form';
import { fetchPostsByTopicSlug } from '@/db/queries/posts';

export default async function TopicShowPage({ params }: any) {
  const { slug } = await params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-green-100">
      <div className="col-span-3 bg-green-200">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
