import React from "react";
import { UseTodo } from "../store/UseTodo";

function Color() {
  const { color, handleColor } = UseTodo();

  const handleClick = (color) => {
    handleColor(color);
    console.log(color);
  };

  return (
    <main className="flex flex-col gap-2 mt-10 ml-5">
      <div
        onClick={() => handleClick("#dc2626")}
        className="rounded-full w-10 h-10 bg-red-600"
      ></div>
      <div
        onClick={() => handleClick("#16a34a")}
        className="rounded-full w-10 h-10 bg-green-600"
      ></div>
      <div
        onClick={() => handleClick("#9333ea")}
        className="rounded-full w-10 h-10 bg-purple-600"
      ></div>
      <div
        onClick={() => handleClick("#06b6d4")}
        className="rounded-full w-10 h-10 bg-cyan-600"
      ></div>
      <div
        onClick={() => handleClick("#4338ca")}
        className="rounded-full w-10 h-10 bg-indigo-700"
      ></div>
      <div
        onClick={() => handleClick("#059669")}
        className="rounded-full w-10 h-10 bg-emerald-600"
      ></div>
      <div
        onClick={() => handleClick("#f97316")}
        className="rounded-full w-10 h-10 bg-orange-500"
      ></div>
      <div
        onClick={() => handleClick("#eab308")}
        className="rounded-full w-10 h-10 bg-yellow-500"
      ></div>
      <div
        onClick={() => handleClick("#22d3ee")}
        className="rounded-full w-10 h-10 bg-sky-400"
      ></div>
      <div
        onClick={() => handleClick("#4ade80")}
        className="rounded-full w-10 h-10 bg-lime-400"
      ></div>
      <div
        onClick={() => handleClick("#f43f5e")}
        className="rounded-full w-10 h-10 bg-rose-500"
      ></div>
    </main>
  );
}

export default Color;
