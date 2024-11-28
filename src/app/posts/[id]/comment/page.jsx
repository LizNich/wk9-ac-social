// This is the new comment form - currently on a separate page
// It adds a comment and returns to the previous page

import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function CommentFormPage({ params }) {
  const post_id = params.id;

  async function handleAddComment(formData) {
    "use server";

    const username = formData.get("username");
    const comment = formData.get("comment");

    await db.query(
      `INSERT INTO comments (username, comment, post_id) VALUES ($1, $2, $3)`,
      [username, comment, post_id]
    );
    redirect(`/posts/${post_id}`);
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="bg-[#fffffa] bg-opacity-70 text-black text-center mt-4 p-2 w-full text-2xl font-bold mb-6">
        Add a new Comment
      </h1>

      <form action={handleAddComment} className="space-y-4">
        <label className="block font-medium mb-2">
          <strong> Username:</strong>
        </label>
        <input
          name="username"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />

        <label className="block font-medium mb-2">
          <strong> Comment:</strong>
        </label>
        <input
          name="comment"
          placeholder="Add Comment"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />

        <button className="bg-gray-500 text-white px-24 py-2 rounded-lg hover:bg-blue-600 transition text-2xl font-bold flex justify-center items-center  ">
          Submit Comment
        </button>
      </form>
    </div>
  );
}
