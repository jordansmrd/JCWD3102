/** @format */

import { client } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const blogs = await client.getEntries({ content_type: "blog" });
  blogs.items.map((_: any) => {
    console.log(_.sys.id);
  });

  return (
    <div className="max-w-screen-md m-auto mt-5 flex flex-col items-center gap-5">
      {blogs.items.map((blog: any, key: number) => (
        <Link
          href={"/blogs/" + blog.sys.id}
          key={key}
          className=" max-w-screen-sm border p-4 px-8 rounded-[20px] shadow-md w-full break-words"
        >
          <div className="text-2xl font-bold ">{blog.fields.title}</div>
          <div className="text-xl font-bold ">{blog.fields.contentData}</div>
          <Image
            width={200}
            height={200}
            src={"https:" + blog.fields.foto.fields.file.url}
            alt=""
          />
          <div className="text-lg font-semibold ">
            <span>longitude : {blog.fields.location.lon}</span>{" "}
            <span>latitidu : {blog.fields.location.lat}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
