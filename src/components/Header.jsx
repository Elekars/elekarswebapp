// components/Header.js

import React from "react";
import Button from "./Button";
import { isMobile } from "react-device-detect";

const Header = () => {
  const phoneNumber = "+919201630479";

  return (
    <header>
      <div className="flex items-center justify-start p-4 bg-gray-100">
        <img
          src="/logo.png"
          width={100}
          height={100}
          quality={100}
          alt="Logo"
          className=" aspect-auto  block rounded-xl shadow-lg border-2"
        />
        <div className="text-start mx-2 md:mx-5 mt-5 text-xl font-bold flex-grow">
          <h1 className="text-blue-500 md:text-[40px] text-[40px]  italic font-semibold font-serif">
            Ele<span className="text-[#33ae60]">kars</span>
          </h1>
          <p className="md:text-[16px] text-[10px] whitespace-nowrap text-gray-800 capitalize">
            Go green Go Electic
          </p>
        </div>
        {/* <Image
          src="/logo.jpg"
          width={100}
          height={100}
          alt="Logo"
          className="object-fill hidden md:block rounded-xl shadow-lg border-2"
        /> */}
        <div className="px-2">
          <a href={`tel:${phoneNumber}`}>
            {" "}
            <Button title={"Reach Us"} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
