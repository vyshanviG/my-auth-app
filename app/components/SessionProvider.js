// app/components/SessionProvider.js
"use client"; // This must be a client component to hold state.

import { SessionProvider as Provider } from "next-auth/react";

// This is a simple wrapper component.
export default function SessionProvider({ children, session }) {
  return <Provider session={session}>{children}</Provider>;
}