"use client";

import { supabase } from "@/Lib/supabaseClient";

export default function Login() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={loginWithGoogle}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
