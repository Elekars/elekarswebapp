import React from "react";
import OneWayServicesCard from "./OneWayServicesCard";
import RoundTripServicesCard from "./RoundTripServicesCard";
import SemiRoundTripServicesCard from "./SemiRoundTripServicesCard";
import ComponentHeader from "./ComponentHeader";

export default function OurServices() {
  return (
    <div className="pb-8">
      <ComponentHeader
        title={"Our services"}
        subheading={"Reliable, Eco-Friendly Travel Solutions for Every Journey"}
      />
      <div className="flex md:gap-5 gap-3 hide-scrollbar md:justify-center px-4 overflow-x-scroll">
        <OneWayServicesCard />
        <RoundTripServicesCard />
        <SemiRoundTripServicesCard />
      </div>
    </div>
  );
}
