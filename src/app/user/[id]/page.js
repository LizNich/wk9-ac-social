// OTHER USERs

import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";

export default async function OtherProfilePage() {
  const { userId } = await auth();

  const responsePosts = await db.query(
    `SELECT
      posts.id,
      posts.villager, 
      posts.reason,
      users.username,
      users.island,
      users.character,
      users.personality,
      users.nonplayable,
      users.store,
      users.flower,
      users.celebration,
      users.season,
      users.id as user_id
FROM posts
JOIN users ON posts.clerk_id = users.clerk_id
WHERE posts.clerk_id = '${/user/[userId]}'
  `
  );
  const posts = responsePosts.rows;

  // Fetch user info - FOR THE OTHER USER
  const responseUser = await db.query(`
    SELECT * FROM users WHERE clerk_id = '${/user/[userId]}'
  `);
  const numUsers = responseUser.rowCount;

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">
          <p>${userId}</p> PROFILE
        </h2>
        {posts && posts.length > 0 && (
          <div className="mb-4">
            <p>My Island: {posts[0].island}</p>
            <p>My Character: {posts[0].character}</p>
            <br></br>
            <h2>My Favourite... </h2>
            <ul>
              <p>🌟villager personality: {posts[0].personality}</p>
              <p>🌟special character: {posts[0].nonplayable}</p>
              <p>🌟store: {posts[0].store}</p>
              <p>🌟flower: {posts[0].flower}</p>
              <p>🌟celebration day: {posts[0].celebration}</p>
              <p>🌟season: {posts[0].season}</p>
            </ul>
          </div>
        )}
        <div></div>
      </div>
      <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">
          <p>${userId}</p> POSTS
        </h2>
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="mb-4 border-b border-gray-200 pb-2">
              <h3 className="text-lg font-semibold"></h3>
              <p>My favourite villager is: {post.villager}</p>
              <p>Why?: {post.reason}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
