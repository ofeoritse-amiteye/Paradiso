"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DUMMY_USER } from "@/app/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      localStorage.setItem("isLoggedIn", "true");
      router.replace("/");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

      {/* LEFT */}
      <div className="flex items-center justify-center px-8">
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-5">
          <h1 className="text-2xl font-semibold">Sign in</h1>

          {error && <p className="text-red-500 text-sm">{error}</p>} {/* Error message */}

          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-md px-4 py-3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-md px-4 py-3"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Sign in
          </button>

          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 underline">
              Sign up
            </Link>
          </p>

          {/* DIVIDER */}
          <div className="flex items-center gap-3">
            <div className="h-px bg-gray-300 flex-1" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <SocialButton icon="/google.png" text="Continue with Google" />
          <SocialButton icon="/apple.svg" text="Continue with Apple" />
          <SocialButton icon="/facebook.svg" text="Continue with Facebook" />

          <Link href="/terms" className="text-xs text-gray-500 underline">
            Terms of use
          </Link>
        </form>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="hidden lg:block bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
    </div>
  );
}

function SocialButton({ icon, text }) {
  return (
    <button
      type="button"
      className="w-full border flex items-center justify-center gap-3 py-3 rounded-md hover:bg-gray-50 transition"
    >
      <img src={icon} alt="" className="w-5 h-5" />
      <span className="text-sm">{text}</span>
    </button>
  );
}
