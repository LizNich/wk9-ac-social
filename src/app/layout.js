// This is the -LAYOUT- Page

import Link from "next/link";
import "./globals.css";
import { Gluten } from "next/font/google";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const gluten = Gluten({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${gluten.className}`}>
          <div>
            <header className="bg-[#9DFFB0] text-black text-center mt-4 p-2">
              <nav className="text-xl font-bold">
                <Link href="/">Welcome Home!</Link> |
                <Link href="/posts">All Posts</Link> |
                <Link href="/user">My Profile</Link> |
                <SignedOut>
                  <SignInButton className="bg-gray-500 text-white w-24 py-1 ml-2 rounded text-sm font-bold hover:bg-blue-600 transition" />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </nav>
            </header>
            <main>{children}</main>
            <footer className="bg-[#9DFFB0] text-black text-center mt-0 p-2 sticky">
              <p>&copy; The Animal Crossing Collective 2024</p>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

//copy paste no change below
// return (
//   <ClerkProvider>
//     <html lang="en">
//       <body>
//         <SignedOut>
//           <SignInButton />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//         {children}
//       </body>
//     </html>
//   </ClerkProvider>
