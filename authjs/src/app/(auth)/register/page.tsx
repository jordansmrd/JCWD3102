/** @format */

import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <form>
      <center className=" text-xl font-bold mb-3">Register Page</center>
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
        have an account?{" "}
        <Link href={"/login"} className="font-bold">
          Login
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
