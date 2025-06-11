'use client';

import * as actions from '@/actions';
import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';

export default function PostCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={actions.createPost}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>

            <Input name="title" label="Title" labelPlacement="outside" placeholder="Title" />

            <Input name="content" label="Content" labelPlacement="outside" placeholder="Content" />
            <Button>Create Post</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
