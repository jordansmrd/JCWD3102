/** @format */
"use client";
import { auth } from "@/../auth";
import { useSession } from "next-auth/react";

export default function Home() {
  // const session = await auth();
  // if (!session?.user) return null;

  // console.log(session?.user, "ini user");
  const { data: session } = useSession();

  return (
    <div>
      <h1>{session?.user?.full_name}</h1>
      <h1>{session?.user?.email}</h1>
      <h1>{session?.user?.id}</h1>

      <img src={session?.user.img} alt="" />
    </div>
  );
}
