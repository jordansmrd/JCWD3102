/** @format */

import React from "react";

type Props = {};

export default function LoadingComponent({}: Props) {
  return (
    <div className="max-w-screen-sm w-full grid grid-cols-3 gap-y-4 justify-items-center">
      {[...Array(8)].map((product, key) => (
        <div key={key} className="max-w-44 rounded-md flex flex-col gap-1  ">
          <div>
            <div className="rounded-t-md w-[200px] h-[200px] bg-gray-300"></div>
          </div>
          <div className=" font-bold truncate text-sm p-3">Loading....</div>
        </div>
      ))}
    </div>
  );
}
