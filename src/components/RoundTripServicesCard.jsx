import React from "react";

export default function RoundTripServicesCard() {
  return (
    <div className="border-2 hover:shadow-2xl  rounded-xl border-blue-300 bg-blue-50 relative min-w-[350px] md:min-w-[400px] max-w-[400px] justify-center items-center flex flex-col">
      <div className="p-2">
        <img
          src={"/oneway.jpg"}
          width={400}
          height={250}
          alt=""
          className=" border-2 border-blue-300  rounded-2xl opacity-80"
        />
      </div>
      <div className="absolute md:bottom-[54%] bottom-[60%] flex justify-center items-center">
        <h2 className="text-center text-[40px]  text-green-200  leading-9 font-extrabold text-whit ">
          {" "}
          Round Trip
        </h2>
      </div>

      <div>
        <h2 className="text-center text-[30px]  text-blue-500  leading-9 font-medium text-whit ">
          {" "}
          Round Trip
        </h2>
        <p className="text-[12px] text-center p-2 text-[#666666] leading-7 font-medium">
          Plan your journey with our round-trip EV cab service, perfect for
          those who need a return ride. We offer seamless travel experiences to
          and from your desired locations, ensuring comfort and safety
          throughout. With professional drivers and a commitment to
          sustainability, our round-trip service makes travel more convenient,
          cost-effective, and environmentally friendly.
        </p>
      </div>
    </div>
  );
}
