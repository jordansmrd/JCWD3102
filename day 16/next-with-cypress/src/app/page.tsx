/** @format */

import Link from "next/link";

export default function Home() {
  return (
    <nav>
      <h1>Home Page</h1>
      <Link href={"/about"}>About</Link>
    </nav>
  );
}
