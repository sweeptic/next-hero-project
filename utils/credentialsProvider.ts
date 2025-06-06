import { db } from '@/db';
import CredentialsProvider from 'next-auth/providers/credentials';

export const credentialsProvider = CredentialsProvider({
  name: 'credentials',
  credentials: {
    email: { label: 'email', type: 'email' },
    password: { label: 'password', type: 'password' },
  },
  async authorize(credentials) {
    const prisma = db;
    const user = await prisma.user.findUnique({
      where: { email: credentials?.email as string },
    });

    if (!user) throw new Error('user with that email does not exist');

    // ⚠️ WARNING: DO NOT do this in real-world development
    if (user.password !== credentials?.password) throw new Error('incorrect password');

    return user;
  },
});
