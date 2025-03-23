import LoginForm from '@src/components/LoginForm';
import { Providers } from '@src/components/providers';

export default function LoginPage() {
  return (
    <Providers>
      <LoginForm />
    </Providers>
  );
}
