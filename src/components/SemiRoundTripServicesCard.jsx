import React from "react";

export default function SemiRoundTripServicesCard() {
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
          Semi Round Trip
        </h2>
      </div>

      <div>
        <h2 className="text-center text-[30px]  text-blue-500  leading-9 font-medium text-whit ">
          {" "}
          Semi Round Trip
        </h2>
        <p className="text-[12px] text-center p-2 text-[#666666] leading-7 font-medium">
          Our semi-round trip EV cab service offers flexibility for travelers
          who have multiple stops or need to return to a different location.
          Whether its a short break or a quick detour, we provide a tailored,
          comfortable ride to suit your needs. Enjoy eco-friendly travel with
          the same safety and reliability, ensuring a smooth experience for your
          multi-stop journey.
        </p>
      </div>
    </div>
  );
}
