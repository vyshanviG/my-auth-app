// app/dashboard/page.js
"use client"; // Client component to check session status.

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  // useSession hook gives us the user's login data and status.
  const { data: session, status } = useSession();

  // 1. If we are currently checking, show a loading message.
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // 2. IMPORTANT: If the user is NOT logged in, redirect them back to the login page.
  if (status === "unauthenticated") {
    redirect("/login");
  }

  // 3. If we are here, it means the user IS logged in.
  // We can show their data.
  return (
    <div style={{ padding: "50px" }}>
      <h1>Welcome to Your Protected Dashboard</h1>
      <p>This page is only visible after you log in.</p>
      <div style={{ border: "1px solid #ddd", padding: "15px", margin: "20px 0" }}>
        <h2>Your User Info:</h2>
        <p><strong>Name:</strong> {session.user.name}</p>
        <p><strong>Email:</strong> {session.user.email}</p>
        <p><strong>Provider:</strong> {session.user.image ? "Social" : "Credentials"}</p>
        <p><strong>User ID:</strong> {session.user.id}</p>
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        style={{ padding: "10px 20px", cursor: "pointer", background: "red", color: "white", border: "none" }}
      >
        Sign Out
      </button>
    </div>
  );
}