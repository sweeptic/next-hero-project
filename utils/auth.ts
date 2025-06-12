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
  callbacks: {
    // Usually not needed, here we are fixing a bug in nextauth
    async session({ session, token }: any) {
      if (session && token) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
};

export const { auth, signOut, signIn, handlers } = NextAuth(authOptions);
