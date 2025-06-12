'use client';

import * as actions from '@/actions';
import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { useActionState } from 'react';
import FormButton from '../form-button';

export default function PostCreateForm() {
  const [formState, action, pending] = useActionState(actions.createPost, { errors: {} } as any);

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>

            <Input name="title" label="Title" labelPlacement="outside" placeholder="Title" />

            <Input name="content" label="Content" labelPlacement="outside" placeholder="Content" />
            <FormButton isPending={pending}>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
