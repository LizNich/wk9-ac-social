// This is -POSTS- page
// AND contains a link to a new POSTFORM and to a new USERFORM
// It shows ALL the posts

import PostForm from "@/components/PostForm";
import UserForm from "@/components/UserForm";
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

  // renders the page
  // checks signed-in state. if user is signed-in (===1) shows PostForm. If not show UserForm (to sign-up)
  // if user is signed-out, tells user to sign-in
  // then displays posts. each post has a link to authors profile, then user_name and content

  // Sort logic
  // if (searchParams.sort === "asc") {
  //   posts.sort((a, b) => a.villager.localeCompare(b.villager)); // A-Z
  // } else if (searchParams.sort === "desc") {
  //   posts.sort((a, b) => b.villager.localeCompare(a.villager)); // Z-A
  // }

  return (
    <div>
      <h2>Posts</h2>

      <SignedIn>{numUsers === 1 ? <PostForm /> : <UserForm />}</SignedIn>

      <SignedOut>
        <Link href="/sign-in">Please sign in to make a post</Link>
      </SignedOut>
      <br></br>
      <p>POSTS GO BELOW HERE</p>
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
