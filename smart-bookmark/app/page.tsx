"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/Lib/supabaseClient";
import Login from "./login/page";
import AddBookmark from "@/components/AddBookmark";
import BookmarkList from "@/components/BookmarkList";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  if (!user) return <Login />;

  return (
    <div>
      <Navbar user={user} />
      <div className="p-4">
        <AddBookmark user={user} />
        <BookmarkList user={user} />
      </div>
    </div>
  );
}
