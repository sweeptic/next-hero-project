

import { db } from '@/db';
import ChipList from './chiplist';

export default async function TopicListPage() {
  const topics = await db.topic.findMany();

  return (
    <div>
      <ChipList topics={topics} />
    </div>
  );
}
