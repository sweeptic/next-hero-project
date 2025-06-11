import PostCreateForm from '@/components/posts/post-create-form';

export default function TopicShowPage({ params }: any) {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-green-100">
      <div className="col-span-3 bg-green-200">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
      </div>
      <div>
        <PostCreateForm />
      </div>
    </div>
  );
}
