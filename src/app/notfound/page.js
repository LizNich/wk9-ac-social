// Replicates a 404

"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex justify-center items-center mt-40 mb-40 ">
      <div className="bg-white bg-opacity-75 p-8 rounded-lg text-center shadow-lg">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl text-gray-700 mt-4">There is no one here!</h2>
        <h3 className="text-xl text-gray-600 mt-2">Go Home</h3>
        <Link
          href="/"
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-1xl font-bold flex justify-center items-center w-48"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
