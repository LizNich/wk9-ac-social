// This component goes in the posts page.js = App/posts/page.js

"use client";
import { deleteAction } from "@/utils/deleteaction";
import { useRouter } from "next/navigation";

export function DeletePost({ postID }) {
  const router = useRouter();

  const deletePost = async () => {
    console.log("delete post called");
    deleteAction(postID);
    console.log("delete post, delete action finished");
    router.push("/user");
  };

  return (
    <div>
      <button
        onClick={() => deletePost()}
        className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition text-1xl font-bold flex justify-center items-center w-10"
      >
        <strong>x</strong>
      </button>
    </div>
  );
}
