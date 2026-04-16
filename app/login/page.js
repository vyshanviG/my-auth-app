// app/login/page.js
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      setError("Invalid username or password");
    } else if (result?.url) {
      router.push(result.url);
    }
  };

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h1>Login to Your App</h1>
      <p>This is where you can access your protected content.</p>

      {/* 1. Username/Password Login Form */}
      <div style={{ border: "1px solid #ccc", padding: "20px", marginBottom: "30px", maxWidth: "400px", borderRadius: "8px" }}>
        <h2>Username & Password Login</h2>
        <form onSubmit={handleCredentialsLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <button type="submit" style={{ padding: "10px", cursor: "pointer", background: "#000", color: "#fff", border: "none", borderRadius: "4px" }}>
            Login
          </button>
          {error && <p style={{ color: "red", margin: "0" }}>{error}</p>}
        </form>
      </div>

      {/* 2. Social Logins */}
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          style={{ padding: "10px 20px", cursor: "pointer", background: "#4285F4", color: "white", border: "none", borderRadius: "4px" }}
        >
          Sign in with Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          style={{ padding: "10px 20px", cursor: "pointer", background: "#333", color: "white", border: "none", borderRadius: "4px" }}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}