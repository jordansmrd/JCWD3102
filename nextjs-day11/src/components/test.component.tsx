/** @format */
"use client";
import { IProduct } from "@/interfaces/phone.interface";
import { getData } from "@/utils/get-data";
import React, { useEffect, useState } from "react";
import CardComponent from "./card.component";

type Props = {};

export default function TestComponent({}: Props) {
  const [data, setData] = useState<Array<IProduct>>([]);
  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);
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
