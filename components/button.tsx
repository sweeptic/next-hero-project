import { Button } from '@heroui/button';
import { useFormStatus } from 'react-dom';

interface FormButtonProps {
  children: React.ReactNode;
  isPending?: boolean;
}

export default function FormButton({ children, isPending }: FormButtonProps) {
  const { pending } = useFormStatus();

  console.log('pending', pending);

  return (
    <Button isLoading={isPending || false} type="submit">
      {children}
    </Button>
  );
}
