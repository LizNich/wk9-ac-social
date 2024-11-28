import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function PostForm() {
  const { userId } = await auth();
  async function handleSubmit(formData) {
    "use server";
    const content = formData.get("content");

    db.query(
      `INSERT INTO posts (villager, reason, clerk_id) VALUES ($1, $2,$3)`,
      [villager, reason, userId]
    );

    revalidatePath("/posts");
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="bg-[#fffffa] bg-opacity-70 text-black text-center mt-4 p-2 w-full text-2xl font-bold mb-10">
        <strong>Add a new Post</strong>
      </h2>

      <form action={handleAddPost} className="space-y-4">
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
