// This is the -NEW COMMENT FORM- page
// The form is currently on this separate page
// It adds a comment and returns back to the comments page

"use client";
import { db } from "@/utils/db";
//import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
//import { redirect } from "next/navigation";
//import * as Form from "@radix-ui/react-form";
import { commentAction } from "@/utils/commentaction";

export function CommentFormPage({ params }) {
  const post_id = params?.id;

  async function handleAddComment(formData) {
    commentAction(postID);
    const username = formData.get("username");
    const comment = formData.get("comment");

    console.log({ username, comment });

    await db.query(
      `INSERT INTO comments (username, comment, post_id) VALUES ($1, $2, $3)`,
      [username, comment, post_id]
    );

    revalidatePath("/posts");
  }

  return (
    <form action={handleAddComment}>
      <p>Comment form ... </p>
      <input type="text" name="username" placeholder="Your Name" />
      <input type="text" name="comment" placeholder="Add Comment" />
      <button>Submit Comment</button>
    </form>
  );
}
