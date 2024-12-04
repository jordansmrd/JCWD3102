/** @format */
import CardComponent from "@/components/card.component";
import { IProduct } from "@/interfaces/phone.interface";
import { getData } from "@/utils/get-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "landing page",
  description: "ini landing page",
};

export default async function Home() {
  const data: Array<IProduct> = await getData();

  return (
    <center className="mt-2">
      <div className="max-w-screen-sm w-full grid grid-cols-3 gap-y-4 justify-items-center">
        {data.map((product, key) => (
          <CardComponent product={product} key={key} />
        ))}
      </div>
    </center>
  );
}
