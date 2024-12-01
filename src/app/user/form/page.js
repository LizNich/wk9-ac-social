// This is the BIO FORM page
// The BioForm component links into here

// import { BioForm } from "@/components/BioForm";

// export default function FormPage() {
//   return (
//     <div className=" flex flex-col items-center justify-center">
//       <h2 className=" bg-[#fffffa] bg-opacity-70 text-black text-center mt-2 mb-4 p-2 w-full text-2xl font-bold">
//         Welcome to The Animal Crossing Collective! 🌟 Sign-up Here 🌟
//       </h2>
//       <div className="w-full max-w-md">
//         <BioForm />
//       </div>
//     </div>
//   );
// }

import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function BioForm() {
  const { userId } = await auth();
  async function handleSubmit(formData) {
    "use server";

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
      `INSERT INTO users (island, character, personality, nonplayable, store, flower, celebration, season, clerk_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
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
    <div>
      <div className=" flex flex-col items-center justify-center">
        <h2 className=" bg-[#fffffa] bg-opacity-70 text-black text-center mt-2 mb-4 p-2 w-full text-2xl font-bold">
          🌟 Add and Update your Profile 🌟
        </h2>
      </div>
      <div className="w-full max-w-md">
        <form action={handleSubmit}>
          <input name="my island" placeholder="My Island" />
          <input name="My Character" placeholder="My Character" />
          <input
            name="villager personality"
            placeholder="villager personality"
          />
          <input name="store" placeholder="store" />
          <input name="pecial character" placeholder="special character" />
          <input name="flower" placeholder="flower" />
          <input name="celebration day" placeholder="celebration day" />
          <input name="season" placeholder="season" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
