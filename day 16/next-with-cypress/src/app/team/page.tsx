/** @format */

import React from "react";

type Props = {};

export default function Page({}: Props) {
  const teams = ["team1", "team2", "team3"];
  return (
    <div>
      {teams.map((_, k) => (
        <p key={k}>{_}</p>
      ))}
    </div>
  );
}
