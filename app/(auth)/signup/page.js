"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[2fr_3fr]">
      
      {/* LEFT – FORM */}
      <div className="flex items-center justify-center px-10">
        <div className="w-full max-w-sm space-y-6">

          {/* LOGO */}
          <h1 className="text-2xl font-semibold">
            Create account
          </h1>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-md px-4 py-3"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Continue
          </button>

          {/* SIGN IN LINK */}
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 underline">
              Sign in
            </Link>
          </p>

          {/* DIVIDER */}
          <div className="flex items-center gap-3">
            <div className="h-px bg-gray-300 flex-1" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          {/* SOCIAL BUTTONS */}
          <SocialButton
            icon="/google.png"
            text="Continue with Google"
          />

          <SocialButton
            icon="/apple.svg"
            text="Continue with Apple"
          />

          <SocialButton
            icon="/facebook.svg"
            text="Continue with Facebook"
          />

          {/* TERMS */}
          <p className="text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline">
              Terms of use
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT – IMAGE */}
      <div
        className="lg:grid-cols-[2fr_4fr]
"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      />
    </div>
  );
}

/* SOCIAL BUTTON COMPONENT */
function SocialButton({ icon, text }) {
  return (
    <button
      className="
        w-full border rounded-md py-3
        flex items-center justify-center gap-3
        hover:bg-gray-50 transition
      "
    >
      <img src={icon} alt="" className="h-5 w-5" />
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}
