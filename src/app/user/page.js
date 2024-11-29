// This is the -MY PAGE USER PROFILE- page
// it shows all the user details for the currently signed in clerk_id'd user
// = My own profile

import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function SignedinPostsPage() {
  const { userId } = await auth(); // Get the signed-in user's clerk_id

  // Query for posts specific to the signed-in user
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
      <div>
        <Link href="/user/bioform">
          <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-1xl font-bold flex justify-center items-center w-48">
            Add Profile
          </button>
        </Link>
      </div>
      <br></br>
      <h2>Bio on the left - DATA FROM THE USER PROFILE FORM </h2>
      <p>length of service...</p>
      <br></br>
      <h2>Posts on the right = with a delete button</h2>
      <p>Here we show the posts for the signed-in user only </p>
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
