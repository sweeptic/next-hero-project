'use client';

import * as actions from '@/actions';
import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from '@heroui/react';
import { useActionState, useEffect, useState } from 'react';
import ButtonElement from '../button';

export default function TopicCreateForm() {
  const [formState, action, isPending] = useActionState(actions.createTopic, { errors: {} });

  console.log('debug', formState.errors.username?.join(', '));

  const [customFormState, setCustomFormState] = useState({ errors: {} } as any);
  const [username, setUsername] = useState() as any;
  const [description, setDescription] = useState() as any;

  useEffect(() => {
    console.log('formState', formState);

    setCustomFormState(formState);
  }, [formState]);

  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80 ">
            <h3 className="text-lg">Create Topic</h3>
            <Input
              name="username"
              label="Name"
              value={username}
              labelPlacement="outside"
              placeholder="Name"
              onChange={(ev) => {
                setUsername(ev?.target.value);
                setCustomFormState({ errors: {} });
              }}
              isInvalid={!!customFormState.errors.username}
              errorMessage={customFormState.errors.username?.join(', ')}
            />
            <Textarea
              name="description"
              label="Description"
              value={description}
              labelPlacement="outside"
              onChange={(ev) => {
                setDescription(ev?.target.value);
                setCustomFormState({ errors: {} });
              }}
              placeholder="Describe your topic"
              isInvalid={!!customFormState.errors.description}
              errorMessage={customFormState.errors.description?.join(', ')}
            />
            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form?.join(', ')}</div>
            ) : null}
            <ButtonElement isPending={isPending}>Submit</ButtonElement>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
