// This is the form to allow users to make a new post

import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  async function handleAddPost(formData) {
    "use server";

    const username = formData.get("username");
    const villager = formData.get("villager");
    const reason = formData.get("reason");

    await db.query(
      `INSERT INTO posts (username, villager, reason) VALUES ($1, $2, $3)`,
      [username, villager, reason]
    );

    redirect("/posts");
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="bg-[#fffffa] bg-opacity-70 text-black text-center mt-4 p-2 w-full text-2xl font-bold mb-10">
        <strong>Add a new Post</strong>
      </h2>

      <form action={handleAddPost} className="space-y-4">
        <label className="block font-medium mb-2" v>
          Username:
        </label>
        <input
          name="username"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <label className="block font-medium mb-2">Favourite Villager:</label>
        <input
          name="villager"
          placeholder="Favourite Villager"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <label className="block font-medium mb-2">Why?</label>
        <input
          name="reason"
          placeholder="Why the villager is your favourite"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />

        <button className="bg-gray-500 text-white px-24 py-2 rounded-lg hover:bg-blue-600 transition text-2xl font-bold flex justify-center items-center ">
          Submit
        </button>
      </form>
    </div>
  );
}
