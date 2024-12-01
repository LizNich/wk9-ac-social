// This is a new user form. Its not used.
// Users are asked to sign-in to post. Then transfered to the My Profile page to complete
// you don't have to complete it - its encouraging

import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// This is a component that retrieves the current users ID,
// renders a form where users can submti their username and bio,
// handles submission to db
// returns user to /posts after data is saved

// Fetches the users ID and logs it to console
export default async function UserForm() {
  const { userId } = await auth();
  console.log(userId);
  // retrieves username and bio values submitted
  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");
    // and inserts into db via sql
    db.query(
      `INSERT INTO users (username, bio, clerk_id) VALUES ($1, $2, $3)`,
      [username, bio, userId]
    );
    // updates /posts
    revalidatePath("/posts");
  }
  // form below - with handleSubmit to trigger server-side function
  return (
    <form action={handleSubmit}>
      <input name="username" placeholder="Username" />
      <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-1xl font-bold flex justify-center items-center w-48">
        Submit
      </button>
    </form>
  );
}
