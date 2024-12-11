/** @format */

import { client } from "@/lib/contentful";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const blog = await client.getEntry(params.id);
  return (
    <div>
      <div className=" max-w-screen-sm border p-4 px-8 rounded-[20px] shadow-md w-full break-words">
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
      </div>
    </div>
  );
}
