// This page shows all the posts with a sort option
// and imports a delete post button that doesn't work yet

import Link from "next/link";
import { db } from "@/utils/db";
import { DeletePost } from "@/components/DeletePost";

export default async function PostsPage({ searchParams }) {
  const result = await db.query(`SELECT * FROM posts`);
  const posts = result.rows;

  if (searchParams.sort === "asc") {
    posts.sort((a, b) => a.villager.localeCompare(b.villager)); // A-Z
  } else if (searchParams.sort === "desc") {
    posts.sort((a, b) => b.villager.localeCompare(a.villager)); // Z-A
  }

  return (
    <div>
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto p-4">
        <div className="flex">
          <Link href="/posts?sort=asc">Sort A-Z by Villager</Link>
          <span>|</span>
          <Link href="/posts?sort=desc">Sort Z-A by Villager</Link>
        </div>

        <div> {"  "} </div>

        <div>
          <Link href="/posts/new">
            <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-1xl font-bold flex justify-center items-center w-48">
              Add a new post
            </button>
          </Link>
        </div>
      </div>
      <h2 className="bg-[#fffffa] bg-opacity-70 text-black text-center mt-4 p-2 w-full text-2xl font-bold">
        Who is your favourite Villager... and why?
      </h2>
      <section className="post-container px-4 py-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => {
            return (
              <li
                key={post.id}
                className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              >
                <Link href={`/posts/${post.id}`}>
                  <p> {post.username} </p>
                  <p>Favourite Villager - {post.villager}</p>
                  <p>Why? - {post.reason}</p>
                  <p className="text-gray-300">Click for Comments ❤️</p>
                </Link>
                <DeletePost />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
