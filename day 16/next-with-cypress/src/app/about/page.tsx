/** @format */
"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AboutPage() {
  const [count, setCount] = useState<number>(0);
  return (
    <nav>
      <h1>About Page</h1>
      <Link href={"/"} className="hover:flex hidden">
        Home
      </Link>

      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </nav>
  );
}
