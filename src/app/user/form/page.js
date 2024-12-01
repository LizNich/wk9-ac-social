// This is the BIO FORM page
// The BioForm component links into here

import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function BioForm() {
  const { userId } = await auth();
  async function handleFormSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const island = formData.get("island");
    const character = formData.get("character");
    const personality = formData.get("personality");
    const nonplayable = formData.get("nonplayable");
    const store = formData.get("store");
    const flower = formData.get("flower");
    const celebration = formData.get("celebration");
    const season = formData.get("season");
    console.log(season);

    db.query(
      `INSERT INTO users (username, island, character, personality, nonplayable, store, flower, celebration, season, clerk_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,)`,
      [
        username,
        island,
        character,
        personality,
        nonplayable,
        store,
        flower,
        celebration,
        season,
        userId,
      ]
    );

    revalidatePath("/user");
  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-4 mb-4">
      <div className="bg-white shadow-lg rounded-lg p-2 max-w-md w-full">
        <h2 className="text-black text-center mb-6 p-2 text-2xl font-bold">
          Add and Update your Profile
        </h2>
        <form action={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-0">
              My Island is called:
            </label>
            <input
              name="island"
              placeholder="My Island"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#bebe87]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-0">
              My Character is called:
            </label>
            <input
              name="character"
              placeholder="My Character"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#bebe87]"
            />
          </div>

          <h2 className="text-lg font-bold mt-4">My Favourite...</h2>

          <div>
            <label className="block font-semibold mb-0">
              Villager Personality:
            </label>
            <input
              name="personality"
              placeholder="villager personality"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#bebe87]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-0">
              Special Character:
            </label>
            <input
              name="nonplayable"
              placeholder="special character"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#bebe87]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-0">Store:</label>
            <input
              name="store"
              placeholder="store"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#bebe87]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-0">Flower:</label>
            <input
              name="flower"
              placeholder="flower"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#bebe87]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-0">Celebration Day:</label>
            <input
              name="celebration"
              placeholder="celebration day"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#bebe87]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-0">Season:</label>
            <input
              name="season"
              placeholder="season"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#bebe87]"
            />
          </div>

          <button
            type="submit"
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-1xl font-bold flex justify-center items-center w-48"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
