import pool from "@/lib/db";

import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        //
        const response = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [credentials?.email]
        );
        const user = response.rows[0];
        const correctPassword = await compare(
          credentials?.password || "",
          user.password
        );

        if (correctPassword) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add user data to the JWT token
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      const customToken = token as {
        id: string;
        email: string;
        name: string;
        role: string;
      };
      session.user.id = customToken.id;
      session.user.email = customToken.email;
      session.user.name = customToken.name;
      session.user.role = customToken.role;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
