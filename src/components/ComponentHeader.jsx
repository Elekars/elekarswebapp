import React from "react";

export default function ComponentHeader({ title, subheading }) {
  return (
    <div className="text-[#3d8356] pt-6 md:pt-12 md:text-[40px] text-[35px] text-center  font-bold">
      <h2>{title}</h2>
      <p className="text-[16px] text-[#999999] font-normal pb-2 ">
        {subheading}
      </p>
    </div>
  );
}
