import PostList from '@/components/posts/post-list';
import TopicCreateForm from '@/components/topics/topic-create-form';
import TopicListPage from '@/components/topics/topic-list';
import { fetchTopPosts } from '@/db/queries/posts';
import { Divider } from '@heroui/react';

export default function Home() {
  return (
    <div className=" grid grid-cols-4 gap-4 p-4">
      <div className="bg-gray-200 col-span-3 ">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>

      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics </h3>
        <TopicListPage />
      </div>
    </div>
  );
}
