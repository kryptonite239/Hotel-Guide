import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "@/pages/database/connect";
import Users from "@/pages/model/schema";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch(() => ({
          error: "Connection Failed",
        }));
        const results = await Users.findOne({ email: credentials.email });
        console.log(results);
        if (!results) {
          throw new Error("No User of This Email is Found");
        }
        const checkpass = results.password===credentials.password;
        if (!checkpass) {
          throw new Error("Password Does Not Match!");
        }
        return results;
      },
    }),
  ],
});
