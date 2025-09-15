import React from "react";

export default function Button({text}: {text: string}) {
  return (
    <div>
      <button className="text-white text-lg px-[22px] py-[12px] rounded-md bg-[#841315] cursor-pointer">
        {text}
      </button>
    </div>
  );
}
