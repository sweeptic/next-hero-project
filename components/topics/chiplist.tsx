'use client';

import { paths } from '@/paths';
import { Chip } from '@heroui/react';
import Link from 'next/link';

export default function ChipList({ topics }: any) {
  const list = topics.map((topic: any) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row gap-2 flex-wrap">{list}</div>;
}
