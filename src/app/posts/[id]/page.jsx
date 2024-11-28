// This is the comments page with a link to add a new comment
import { db } from "@/utils/db";
import { redirect } from "next/navigation";
import Link from "next/link";
//import { NewCommentPage } from "@/components/commentform"; //correct but couldn't get this to work

export default async function SinglePostPage({ params }) {
  const { id } = params;

  // = the post
  const postResult = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
  const post = postResult.rows[0];

  // = all the relevant comments
  const commentsResult = await db.query(
    "SELECT * FROM comments WHERE post_id = $1",
    [id]
  );
  const comments = commentsResult.rows; // = all rows

  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="bg-[#fffffa] bg-opacity-70 text-black text-center mt-6 p-2 w-full text-2xl font-bold mb-0">
          {post.username}&apos;s favourite villager is ...🍃
          {post.villager}🍃
        </h2>
        <ul>
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <p className="bg-[#fffffa] bg-opacity-70 text-black text-left mt-0 p-2 w-full text-1xl font-bold mb-0">
                Why? {post.reason}
              </p>
            </Link>
          </li>
        </ul>
        <h3 className="text-black text-left  w-full text-1xl font-bold ">
          Comments:
        </h3>
        <ul className="bg-blue-500 text-white p-6 rounded-lg shadow-lg ">
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>
                {comment.comment} -- {comment.username}
              </p>
            </li>
          ))}
        </ul>
        <Link href={`/posts/${post.id}/comment`}>
          <button className="bg-gray-500 text-white w-64 py-2 rounded-lg hover:bg-blue-600 transition text-xl font-bold flex justify-center items-center">
            Add a Comment
          </button>
        </Link>
      </div>
    </div>
  );
}
