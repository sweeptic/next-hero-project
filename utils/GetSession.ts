import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/db';

const prisma = db;

const authOptions: any = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) throw new Error('user with that email does not exist');

        // ⚠️ WARNING: DO NOT do this in real-world development
        if (user.password !== credentials?.password) throw new Error('incorrect password');

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: 'jwt' },
  secret: 'secret', // store this in a .env file
  // Usually not needed, here we are fixing a bug in next-auth
  //   callbacks: {
  //     async session({ session, user }: any) {
  //       console.log('_____', session, user);

  //       if (session.user) {
  //         session.user.id = user.id;
  //         session.user.role = user.role;
  //       }
  //       return session;
  //     },
  //   },
};

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
// const getSession = () => getServerSession(authOptions);

// export { authOptions, getSession };

export const { auth, signOut, signIn, handlers } = NextAuth(authOptions);
