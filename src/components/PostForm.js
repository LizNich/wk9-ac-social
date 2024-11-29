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
//import * as Form from "@radix-ui/react-form";

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
    <form action={handleSubmit}>
      <p>Add Radix Form HERE or Format the form like wk8</p>
      <input name="villager" placeholder="Favourite Villager" />
      <input name="reason" placeholder="Why?" />
      <button>Submit</button>
    </form>
  );
}
