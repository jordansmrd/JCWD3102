/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="w-full min-h-screen bg-black text-white flex  justify-center items-center">
      <div className="border-2 rounded-md p-2">{children}</div>
    </div>
  );
}
