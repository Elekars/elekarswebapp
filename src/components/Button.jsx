import React from "react";
import { isMobile } from "react-device-detect";

export default function Button({title}) {
  return (
    <div className="text-[15px] whitespace-nowrap cursor-pointer leading-7 shadow-xl border-2 bg-gradient-to-b from-[#3d8356]  via-[#4ea66d] to-[#5bb279] text-white w-fit px-4 p-1 rounded-2xl  ">
     {title}
    </div>
  );
}
