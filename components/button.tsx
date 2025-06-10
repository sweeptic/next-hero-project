import { Button } from '@heroui/button';
import { useFormStatus } from 'react-dom';

interface FormButtonProps {
  children: React.ReactNode;
  isPending: boolean;
}

export default function ButtonElement({ children, isPending }: FormButtonProps) {
  const { pending } = useFormStatus();

  console.log('pending', pending);

  return (
    <Button isLoading={isPending} type="submit">
      {children}
    </Button>
  );
}
