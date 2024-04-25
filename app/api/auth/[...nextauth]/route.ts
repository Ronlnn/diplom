// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import { any } from "prop-types";
//
// export const authHandler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//     }),
//   ],
//   secret: process.env.SECRET ?? "",
// });
//
// const handler = NextAuth(authHandler);
// export {handler as GET, handler as POST}

// export { authHandler as GET, authHandler as POST };



// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google"
//
// export default async function auth(req:any, res:any) {
//   const providers = [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//     }),
//   ]
//
//   const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.includes("signin")
//
//   // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
//   if (isDefaultSigninPage) providers.pop()
//
//   return await NextAuth(req, res, {
//     providers,
//   })
// }


import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
});

export { handler as GET, handler as POST };