import NextAuth from 'next-auth';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { credentialsProvider } from './credentialsProvider';
import { db } from '@/db';
import { googleProvider } from './googleProvider';

const prisma = db;

const authOptions: any = {
  adapter: PrismaAdapter(prisma),
  providers: [credentialsProvider, googleProvider],
  session: { strategy: 'jwt' },
  secret: 'secret', // store this in a .env file
};

export const { auth, signOut, signIn, handlers } = NextAuth(authOptions);
