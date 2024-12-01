// Replicates a 404

// I couldn't force this to work so I have replicated this in app/notfound also

"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <div className=" flex justify-center items-center mt-40 mb-40 ">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg text-center shadow-lg">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <h2 className="text-2xl text-gray-700 mt-4">There is no one here!</h2>
          <h3 className="text-xl text-gray-600 mt-2">Go Home</h3>
          <Link
            href="/"
            className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </html>
  );
}
