// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";

// Jump back 3 folders to reach the lib folder
import { authOptions } from "../../../lib/authOptions"; 

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };