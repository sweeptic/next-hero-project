import * as actions from '@/actions';
import { Button } from '@heroui/button';

export default function SignInGoogleForm() {
  return (
    <form action={actions.signInGoogle}>
      <Button type="submit" color="secondary" variant="bordered">
        Google Sign In
      </Button>
    </form>
  );
}
