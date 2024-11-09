import React, { useState } from "react";
import ComponentHeader from "./ComponentHeader";
import FairCalculator from "./FairCalculator";
import { isMobile } from "react-device-detect";

export default function Fare() {
  const [fare, setFare] = useState(null);
  return (
    <>
      <ComponentHeader title={"Fare Calculator"} />
      <div className=" min-h-[500px] flex bg-[#111e42]  md:bg-Fare bg-cover mx-4 rounded-xl">
        <div className=" flex w-full md:w-auto flex-col justify-center md:justify-start mt-12 items-center">
          {" "}
          <FairCalculator fare={fare} setFare={setFare} />
          {isMobile && fare && (
            <div>
              {" "}
              <h3 className="text-center pt-4 text-[#ffffff]  font-semibold text-[25px] whitespace-nowrap">{`Your Estimated fare was... `}</h3>
              <h3 className="text-center pb-4 text-white  font-semibold text-[25px] whitespace-nowrap">
                {" "}
                ₹{fare}
              </h3>{" "}
            </div>
          )}
        </div>
        {!isMobile && fare && (
          <div className="flex justify-center  flex-col  mx-auto items-center">
            <h3 className="text-center text-[#3d8356] pr-20 font-semibold text-[35px] whitespace-nowrap">{`Your Estimated fare was... `}</h3>
            <h3 className="text-center text-blue-900 pr-20 font-semibold text-[35px] whitespace-nowrap">
              {" "}
              ₹{fare}
            </h3>
          </div>
        )}
      </div>
    </>
  );
}
