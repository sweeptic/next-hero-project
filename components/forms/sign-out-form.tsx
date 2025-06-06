import * as actions from '@/actions';
import { Button } from '@heroui/button';

export default function SignOutForm() {
  return (
    <form action={actions.signOutServer}>
      <Button type="submit" color="secondary" variant="bordered">
        Sign Out
      </Button>
    </form>
  );
}
