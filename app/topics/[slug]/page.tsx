export default function TopicShowPage({ params }: any) {
  const { slug } = params;

  console.log('slug', slug);

  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-green-100">
      <div className="col-span-3 bg-green-200">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
      </div>
      <div></div>
    </div>
  );
}
