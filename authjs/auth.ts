/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 3,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          let user = null;
          const res = await fetch(
            "http://localhost:2000/users?email=" +
              credentials.email +
              "&password=" +
              credentials.password
          );

          const data = await res.json();

          user = data[0];
          console.log(user, "ini user");

          if (!user) throw new Error("user not found");
          //   login => jwt => session
          return user;
        } catch (error) {
          if (error instanceof Error) console.log(error.message);

          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async session({ token, session }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.img = token.img as string;
        session.user.full_name = token.full_name as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.img = user.img;
        token.email = user.email;
        token.full_name = user.full_name;
      }

      return token;
    },
  },
});
