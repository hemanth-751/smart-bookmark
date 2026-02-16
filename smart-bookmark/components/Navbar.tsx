"use client";

import { supabase } from "@/Lib/supabaseClient";

export default function Navbar({ user }: { user: any }) {
  const logout = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  return (
    <div className="flex justify-between p-4 border-b">
      <h1 className="font-bold">Smart Bookmark</h1>
      {user && (
        <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
      )}
    </div>
  );
}
