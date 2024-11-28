// https://clerk.com/docs/references/nextjs/custom-signup-signin-pages
// catch all dynamic rout seg
// puts the clerk sign-in component on my home page

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <p>Welcome to The Animal Crossing Collective!</p>
      <p>Sign-in Here</p>
      <SignIn />;
    </div>
  );
}
