/** @format */
"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
type Props = {};

export default function page({}: Props) {
  const login = async (formData: FormData) => {
    try {
      await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirectTo: "/",
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return (
    <form action={login}>
      <center className=" text-xl font-bold mb-3">Login Page</center>
      <div className="flex gap-2 m-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <label htmlFor="">Password</label>
        </div>
        <div className="flex flex-col gap-2">
          <input
            placeholder="youremail@mail.com"
            type="email"
            name="email"
            required
            className=" border bg-black rounded-md  px-2"
          />
          <input
            placeholder="*********"
            type="password"
            name="password"
            required
            className=" border bg-black rounded-md  px-2"
          />
        </div>
      </div>
      <div className="m-2 text-sm">
        Don't have an account?{" "}
        <Link href={"/register"} className="font-bold">
          Register
        </Link>
      </div>
      <center className="mt-2">
        <button
          type="submit"
          className="bg-white text-black px-3 py-1 rounded-md"
        >
          submit
        </button>
      </center>
    </form>
  );
}
