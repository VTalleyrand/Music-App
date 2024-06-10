import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authConfig = {
  // adapter
  adapter: PrismaAdapter(prisma),
  // providers for auth page
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
  ],

  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout'
  },
  session: {
    strategy: 'jwt'
  },
}

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };