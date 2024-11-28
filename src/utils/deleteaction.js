"use server";
import { revalidatePath } from "next/cache";
import { db } from "./db";

export async function deleteAction(postID) {
  console.log("delete action");
  console.log("postID", postID, typeof postID);
  const response = await db.query(`DELETE FROM posts WHERE id = $1`, [postID]);

  const data = await response.json;
  console.log(data);

  revalidatePath("/posts");
}
