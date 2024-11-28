import Link from "next/link";
import "./globals.css";
import { Gluten } from "next/font/google";

export const gluten = Gluten({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gluten.className}`}>
        <div>
          <header className="bg-[#9DFFB0] text-black text-center mt-4 p-2">
            <nav className="text-xl font-bold">
              <Link href="/">Welcome Home!</Link> |
              <Link href="/posts">All Posts</Link> |
              <Link href="/posts/new">Add a New Post</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="bg-[#9DFFB0] text-black text-center mt-0 p-2 sticky">
            <p>&copy; The Animal Crossing Collective 2024</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
