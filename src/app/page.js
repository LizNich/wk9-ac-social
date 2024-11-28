// This is my Home page
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-2">
      <h1 className=" bg-[#fffffa] bg-opacity-70 text-black text-center mt-4 p-4 w-full text-3xl font-bold">
        Welcome to The Animal Crossing Collective
      </h1>
      <section
        className="bg-[#fffffa] bg-opacity-70 text-black text-left mt-4 p-4 w-full max-w-3xl rounded-md shadow-lg
      "
      >
        <p>
          Love your villagers? So do we! This is the place to share your
          favourite Animal Crossing villagers and tell everyone why they&apos;re
          special to you. Whether it&apos;s their quirky personality, adorable
          design, or the countless memories you&apos;ve shared on your island,
          we want to hear it all!{" "}
        </p>

        <h3 className="mt-4 font-bold">
          Here&apos;s how you can join the fun:
        </h3>
        <ul className="list-disc list-inside mt-2">
          <ul>
            🌟 Post about your favourite villager &mdash; share why they&apos;re
            your favourite and what makes them unique.
          </ul>
          <ul>
            💬 Comment on others posts &mdash; Found someone who loves the same
            villager? Or maybe you&apos;re intrigued by one you haven&apos;t met
            yet? Join the conversation!
          </ul>
          <p>
            🍃 Let&apos;s keep it cozy and kind—just like Animal Crossing
            itself! 🍃
          </p>
          <p className="mt-4">
            There are many villagers to chose from so start your first post
            today, and let&apos;s make this island feel like home! 🏝️
          </p>
        </ul>
      </section>
      <Link href="/posts">
        <button className="bg-gray-500 text-white px-24 py-2 rounded-lg hover:bg-blue-600 transition text-2xl font-bold flex justify-center items-center">
          ENTER
        </button>
      </Link>
    </div>
  );
}
