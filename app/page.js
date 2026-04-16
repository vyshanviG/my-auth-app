// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "100px 50px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Welcome to the Authentication App</h1>
      <p style={{ marginBottom: "30px" }}>This is the main home page.</p>
      
      <Link 
        href="/login" 
        style={{ padding: "10px 20px", background: "#000", color: "#fff", textDecoration: "none", borderRadius: "5px" }}
      >
        Go to Login Page
      </Link>
    </div>
  );
}