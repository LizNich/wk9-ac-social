// This is the -OTHER USER USER PROFILE- page
// it uses the user_id from the params to get the users information
// when you click on someone elses username

import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function SinglePostPage({ params }) {
  const { userId } = params; // Get the clerk_id for the selected user

  // Query for posts specific to the SELECTED user
  const responsePosts = await db.query(`
    SELECT
      posts.id,
      posts.villager, 
      posts.reason,
      users.username,
      users.id as user_id
    FROM posts
    JOIN users ON posts.clerk_id = users.clerk_id
     WHERE posts.clerk_id = '${userId}'
  `);

  const posts = responsePosts.rows;

  // Query user information if needed
  const responseUser = await db.query(`
    SELECT * FROM users WHERE clerk_id = '${userId}'
  `);

  const numUsers = responseUser.rowCount;
  return (
    <div>
      <h1>Posts for ADD LINK TO USERNAME</h1>
      <br></br>
      <h2>Bio on the left - DATA FROM THE USER PROFILE FORM </h2>
      <p>length of service...</p>
      <br></br>
      <h2>Posts on the right = with NO delete button</h2>
      <p>Here we show the posts for the selected user </p>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              <Link href={`/user/${post.user_id}`}>{post.username}</Link> says
            </h3>
            <p>{post.villager}</p>
            <p>{post.reason}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
