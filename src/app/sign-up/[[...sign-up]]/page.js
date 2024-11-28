// https://clerk.com/docs/references/nextjs/custom-signup-signin-pages
// catch all dynamic rout seg
// puts the clerk sign-up component on my home page

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <p>Welcome to The Animal Crossing Collective!</p>
      <p>Sign-up Here</p>
      <SignUp />
    </div>
  );
}
