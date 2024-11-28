// This component goes in the posts page.js = App/posts/page.js

// NOTE: currently the button is not active

"use client";
import { useRouter } from "next/navigation";

export function DeletePost({ postID }) {
  const router = useRouter();

  const deletePost = async () => {
    const response = await fetch(`/posts/${post.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    //console.log(data);
    router.push("/posts");
  };

  return (
    <div>
      <button
        onClick={() => deletePost(postID)}
        className="bg-gray-500 text-white px-0 py-2 rounded-lg hover:bg-red-600 transition text-lg font-bold flex justify-center items-center"
      >
        <strong>x</strong>
      </button>
    </div>
  );
}
