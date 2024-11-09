import React from "react";
import Button from "./Button";

export default function Urgent() {
  const phoneNumber = "+919201630479";
  return (
    <div className="  min-h-[200px]  flex items-center border-2 border-[#5c8ffc]/20 justify-center mx-4 rounded-xl  bg-gradient-to-r via-[#ffffff] from-[#5c8ffc]/50 to-[#33ae60]/50 ">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h3 className="md:text-[32px]  text-[20px] leading-[20px] font-extrabold text-[#426f95]">
          For Urgent Booking Call Us Now !!
        </h3>
        <a href={`tel:${phoneNumber}`}>
          <Button title="Call Now!!" />
        </a>
      </div>
    </div>
  );
}
