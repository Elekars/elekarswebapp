import Link from "next/link";
import React from "react";

const FloatingWhatsapp = () => {
  return (
    <div className="z-50 mb- flex flex-col px-4  gap-1 w-fit items-end justify-end left-[100%] sticky bottom-[10%]">
      <a
        className={`
         lg:inline-block order- rounded-full h-16 w-16 bg-[#2EC452] p-4 transition-all duration-300`}
        href="https://wa.me/+919201630479?text=Hello%2C%20I%27m%20interested%20in%20your%20services!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whatsapp.png" alt="whatsapp" height={39} width={39} />
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
