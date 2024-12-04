/** @format */

import { IProduct } from "@/interfaces/phone.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: IProduct;
};

export default function CardComponent({ product }: Props) {
  return (
    <Link
      href={"/ssr/" + product?.id}
      className="max-w-44 rounded-md flex flex-col gap-1 border "
    >
      <div>
        <Image
          width={200}
          height={200}
          src={product.img}
          className="rounded-t-md"
          alt=""
        ></Image>
      </div>
      <div className=" font-bold truncate text-sm p-3">{product?.name}</div>
    </Link>
  );
}
