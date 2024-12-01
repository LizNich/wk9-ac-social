// This is the NEW POST FORM
// it is found linked into the -POSTS- page

// This is a server-side component that allows users to submit a post
// found in /posts

// User completes form and submits
// browser sends the form data to the handleSubmit function
// extracts the form data (content) (formData.get...)
// inserts the content and user id into the posts table using sql
// updates /posts (revalidatePath)

import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function PostForm() {
  const { userId } = await auth();
  async function handleSubmit(formData) {
    "use server";
    const villager = formData.get("villager");
    const reason = formData.get("reason");
    console.log(villager);

    db.query(
      `INSERT INTO posts (villager, reason, clerk_id) VALUES ($1, $2, $3)`,
      [villager, reason, userId]
    );

    revalidatePath("/posts");
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center space-y-4"
    >
      <h2 className="bg-[#fffffa] bg-opacity-70 text-black text-center mt-0 p-2 w-full text-2xl font-bold">
        Post a new favourite here!
      </h2>
      <div className="flex space-x-4">
        <input
          name="villager"
          placeholder="Favourite Villager"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          name="reason"
          placeholder="Why?"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-1xl font-bold flex justify-center items-center w-48">
          Submit
        </button>
      </div>
    </form>
  );
}
