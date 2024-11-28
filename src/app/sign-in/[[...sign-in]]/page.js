// https://clerk.com/docs/references/nextjs/custom-signup-signin-pages
// catch all dynamic rout seg

// This is the SIGN-IN box
// puts the clerk sign-in component on my home page

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <h2 className=" bg-[#fffffa] bg-opacity-70 text-black text-center mt-2 mb-4 p-2 w-full text-2xl font-bold">
        Welcome to The Animal Crossing Collective! ❤️ Sign-in Here ❤️
      </h2>
      <div className="w-full max-w-md">
        <SignIn />;
      </div>
    </div>
  );
}
