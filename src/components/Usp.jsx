import React from "react";

const Usps = () => {
  return (
    <div className=" p-2 md:p-4 bg-white rounded-l-lg">
      <h2 className="text-2xl font-bold font-sans mb-6 text-center text-[#447af0]">
        Why Choose Us?
      </h2>
      <ul className="flex justify-center flex-col text-center gap-4 pl-5 space-y-2">
        <li className="flex flex-col text-start font-medium text-[#22448b]">
          <p className="text-[#33ae60]">
            <i className="fas fa-car-side mr-2"></i>
            <span className="font-semibold">Eco-Friendly Electric Rides:</span>
          </p>
          Enjoy a sustainable journey with our eco-friendly electric vehicles,
          reducing your carbon footprint.
        </li>
        <li className="flex flex-col font-medium text-[#22448b] text-start">
          <p className="text-[#33ae60]">
            <i className="fas fa-car-side mr-2"></i>
            <span className="font-semibold">Expert, Professional Drivers:</span>
          </p>
          Our highly trained, professional drivers ensure a safe and smooth ride
          every time.
        </li>
        <li className="flex flex-col font-medium text-[#22448b] text-start">
          <p className="text-[#33ae60]">
            <i className="fas fa-car-side mr-2"></i>
            <span className="font-semibold">
              Well-Maintained Electric Cars:
            </span>
          </p>
          Travel in comfort with our fleet of well-maintained electric cars,
          regularly serviced for optimal performance.
        </li>
        <li className="flex flex-col font-medium text-[#22448b] text-start">
          <p className="text-[#33ae60]">
            <i className="fas fa-car-side mr-2"></i>
            <span className="font-semibold">
              Safety First: All Cars Equipped with 6 Airbags:
            </span>
          </p>
          Your safety is our priority—every vehicle is equipped with 6 advanced
          airbags for maximum protection.
        </li>
        <li className="flex flex-col font-medium text-[#22448b] text-start">
          <p className="text-[#33ae60]">
            <i className="fas fa-car-side mr-2"></i>
            <span className="font-semibold">
              Extra Headrests for Enhanced Comfort:
            </span>
          </p>
          Experience superior comfort with additional headrests in every seat,
          designed for a more relaxing journey.
        </li>
        <li className="flex flex-col font-medium text-[#22448b] text-start">
          <p className="text-[#33ae60]">
            <i className="fas fa-car-side mr-2"></i>
            <span className="font-semibold">
              Complimentary Water Bottles on Every Trip:
            </span>
          </p>
          Stay hydrated during your journey with free, complimentary water
          bottles provided in every ride.
        </li>
      </ul>
    </div>
  );
};

export default Usps;
