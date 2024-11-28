// This is -POSTS- page
// It shows ALL the posts

import PostForm from "@/components/PostForm";
import UserForm from "@/components/UserForm";
import { db } from "@/utils/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function PostsPage() {
  const { userId } = await auth();

  // get all the posts
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

  // check if the user has a username in the db
  const responseUser = await db.query(
    `SELECT * FROM users WHERE clerk_id = '${userId}'`
  );
  const numUsers = responseUser.rowCount;

  return (
    <div>
      <h2 className="bg-[#0c5e26] bg-opacity-70 text-white  mt-4 p-2 w-full text-sm font-bold mb-10">
        {" "}
        MY NEW ALL POSTS PAGE WITH A FORM AT THE TOP INSTEAD OF A SEPARATE PAGE
      </h2>
      <p className="bg-[#c11cb3] bg-opacity-70 text-white  mt-4 p-2 w-full text-sm font-bold mb-10">
        Form goes here below OR a please sign in to post alert
      </p>
      <SignedIn>{numUsers === 1 ? <PostForm /> : <UserForm />}</SignedIn>
      <SignedOut>
        <Link href="/sign-in" className="text-white">
          {" "}
          Please sign in to make a post alert
        </Link>
      </SignedOut>

      <p className="bg-[#c11cb3] bg-opacity-70 text-white  mt-4 p-2 w-full text-sm font-bold mb-10">
        ALL POSTS show below with username, fave villager and why
      </p>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              <Link href={`/user/${post.user_id}`}>{post.username}</Link> says
            </h3>
            <p>{post.villager}</p>
            <p>{post.reason}</p>
          </div>
        );
      })}
    </div>
  );
}
