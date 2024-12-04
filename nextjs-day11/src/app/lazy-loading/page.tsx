/** @format */
"use client";
import LoadingComponent from "@/components/loading.component";
import dynamic from "next/dynamic";
import React from "react";

type Props = {};

const ComponentA = dynamic(() => import("@/components/test.component"), {
  ssr: false,
  loading: () => <LoadingComponent />,
});
export default function ({}: Props) {
  return (
    <center>
      lazy loading
      <ComponentA />
    </center>
  );
}
