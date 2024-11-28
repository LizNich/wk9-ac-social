// This is the -SIGN-UP- box
// puts the clerk sign-up component on my home page

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <h2 className=" bg-[#fffffa] bg-opacity-70 text-black text-center mt-2 mb-4 p-2 w-full text-2xl font-bold">
        Welcome to The Animal Crossing Collective! 🌟 Sign-up Here 🌟
      </h2>
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </div>
  );
}

// https://clerk.com/docs/references/nextjs/custom-signup-signin-pages
// catch all dynamic rout s
