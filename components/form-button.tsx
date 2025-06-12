'use client';

import { Button } from '@heroui/button';

interface FormButtonProps {
  children: React.ReactNode;
  isPending?: boolean;
}

export default function FormButton({ children, isPending }: FormButtonProps) {
  //   const { pending } = useFormStatus();

  console.log('pending', isPending);

  return (
    <Button isLoading={isPending} type="submit">
      {children}
    </Button>
  );
}
