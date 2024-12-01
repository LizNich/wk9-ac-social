// /posts = shows all posts
// contains a link to components PostForm and UserForm

import PostForm from "@/components/PostForm";
//import UserForm from "@/components/UserForm";
import { db } from "@/utils/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

// fetches posts and user information, determines what components to show, and renders them.
// gets userID of signed-in user - otherwise user is NULL
export default async function PostsPage() {
  const { userId } = await auth();

  // Fetching the posts
  const responsePosts = await db.query(`
    SELECT
      posts.id,
      posts.villager, 
      posts.reason,
      users.username,
      users.id as user_id
    FROM posts
    JOIN users ON posts.clerk_id = users.clerk_id`);
  const posts = responsePosts.rows;

  // check user is in the db
  const responseUser = await db.query(
    `SELECT * FROM users WHERE clerk_id = '${userId}'`
  );
  const numUsers = responseUser.rowCount;

  // renders the page & checks signed-in state.
  // if user is signed-in (===1) shows PostForm.
  // is user is not signed-in asks to sign-in to post
  // then displays posts. each post has a link to authors profile, then user_name and content

  return (
    <div>
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto p-4">
        {" "}
        <SignedIn>
          <PostForm />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">Please sign in to make a post</Link>
        </SignedOut>{" "}
      </div>

      <br></br>
      <h2 className="bg-[#fffffa] bg-opacity-70 text-black text-center mt-0 p-2 w-full text-2xl font-bold">
        Who is your favourite Villager... and why?
      </h2>
      <section className="post-container px-4 py-2">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => {
            return (
              <li
                key={post.id}
                className="bg-green-500 text-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              >
                <Link href={`/user/${post.user_id}`}>{post.username}</Link> says
                <p>{post.villager}</p>
                <p>{post.reason}</p>
                <br></br>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

// Sort logic
// if (searchParams.sort === "asc") {
//   posts.sort((a, b) => a.villager.localeCompare(b.villager)); // A-Z
// } else if (searchParams.sort === "desc") {
//   posts.sort((a, b) => b.villager.localeCompare(a.villager)); // Z-A
// }

{
  /* <SignedIn>{numUsers === 1 ? <PostForm /> : <UserForm />}</SignedIn>
      <SignedOut>
        <Link href="/sign-in">Please sign in to make a post</Link>
      </SignedOut> */
}
