"use client";

import { useState } from "react";
import { supabase } from "@/Lib/supabaseClient";

export default function AddBookmark({ user }: { user: any }) {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const addBookmark = async () => {
    if (!url || !title) return;

    await supabase.from("bookmarks").insert([
      {
        url,
        title,
        user_id: user.id,
      },
    ]);

    setUrl("");
    setTitle("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2"
      />
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL"
        className="border p-2"
      />
      <button onClick={addBookmark} className="bg-green-600 text-white px-3">
        Add
      </button>
    </div>
  );
}
