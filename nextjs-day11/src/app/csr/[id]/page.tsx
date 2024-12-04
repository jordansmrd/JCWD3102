/** @format */
"use client";
import CardComponent from "@/components/card.component";
import { IProduct } from "@/interfaces/phone.interface";
import { getItem } from "@/utils/get-data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const path = usePathname().split("/"); // /ssr/2 => ["","ssr","2"]
  const id = path[path.length - 1]; //2
  const [item, setItem] = useState<IProduct>();

  useEffect(() => {
    getItem(id).then((res) => setItem(res));
  }, []);
  return (
    <center className="flex h-screen items-center justify-center">
      {item?.id && <CardComponent product={item} />}
    </center>
  );
}
