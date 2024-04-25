import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { Account, Profile } from "next-auth";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
    }),
  ],
  callbacks: {
    async signIn({account, profile}:{account: Account | null; profile?: Profile | undefined;}) {

      const isAccount = account && profile;
      if (isAccount && account.provider === "google") {
        // return profile.email_verified && profile.email.endsWith("@example.com");
        return true;
      }
      return true; // Handle other providers differently
    }
  }

});

export { handler as GET, handler as POST };