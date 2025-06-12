'use client';

import { Input } from '@heroui/input';
import { Kbd } from '@heroui/kbd';
import { useSearchParams } from 'next/navigation';
import { SearchIcon } from './icons';
import * as actions from '@/actions';

export default function SearchInput() {
  const searchParams = useSearchParams();

  console.log('searchParams', searchParams);

  return (
    <form action={actions.search}>
      <Input
        defaultValue={searchParams.get('term') || ''}
        aria-label="Search"
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm',
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={['command']}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
        type="search"
        name="term"
      />
    </form>
  );
}
