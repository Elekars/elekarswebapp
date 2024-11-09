import React from "react";
import JourneyForm from "./EnquiryForm";

export default function Form() {
  return (
    <div className=" md:p-8 gap-8 md:bg-Formbg bg-inherit flex justify-between md:mx-4 mx-2 rounded-xl">
      <div>
        <JourneyForm />
      </div>
      <div className="pt-14 hidden md:block">
        <h2 className="text-center text-[50px] font-bold text-[#3d8356]">
          {" "}
          Book Your EV Cab Online Today!
        </h2>
        <p className="text-center text-[17px] leading-[32px] px-14 font-normal text-[#3d8356]">
          Choose our eco-friendly EV cab service for your next journey. Whether
          you need a one-way trip, round trip, or semi-round trip, we offer
          reliable electric vehicle rentals that are fast, convenient, and
          sustainable. Book now for a seamless, green travel experience and
          reduce your carbon footprint!
        </p>
      </div>
    </div>
  );
}
