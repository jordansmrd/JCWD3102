/** @format */
"use client";
import CardComponent from "@/components/card.component";
import { IProduct } from "@/interfaces/phone.interface";
import { getData } from "@/utils/get-data";
import React, { useEffect, useState } from "react";

type Props = {};

//lifecycle method = siklus hidup
//componentDidMount = saat komponen berhasil terpasang(rendered)
//componentDidUpdate = saat sebuah state dalam component mengalami perubahan
//componentWillUnmount = saat sebuah komponen dilepas

export default function Page({}: Props) {
  const [data, setData] = useState<Array<IProduct>>([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
      console.log(res);
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

// exam 10% (64,64,64) = 6,4
// cc 10% = 10
// mini project 15% = 85 = 12,75
// selection test 15% = 85  = 12,75
// finpro 50 => 84

// kkm 85
//42,94
