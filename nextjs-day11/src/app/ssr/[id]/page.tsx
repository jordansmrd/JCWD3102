/** @format */

import CardComponent from "@/components/card.component";
import { IProduct } from "@/interfaces/phone.interface";
import { getItem } from "@/utils/get-data";
import React from "react";
type Props = {
  params: {
    id: string;
  };
};
export async function generateMetadata({ params }: Props) {
  const item: IProduct = await getItem(params.id);
  return {
    title: item.name,
    description: "ini handphone",
    openGraph: {
      images: [item.img],
    },
  };
}

export default async function page({ params }: Props) {
  const item: IProduct = await getItem(params.id);
  return (
    <center className="flex h-screen items-center justify-center">
      <CardComponent product={item} />
    </center>
  );
}
