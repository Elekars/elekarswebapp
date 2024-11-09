import React from "react";

export default function WhyUs() {
  return (
    <div className=" flex flex-col border-2 p-4 gap-4 md:mx-4 rounded-xl  bg-fixe bg-gradient-to-tl from-[#56b176]  via-[#2d8085] to-[#31a6c1]  ">
      <div className="flex justify-center 1 p-2 border-2 border-dashed rounded-md ">
        <div className="md:flex md:gap-4 md:px-12  md:justify-start border- items-center ">
          <div className="flex justify-center md:w-ful">
            {" "}
            <img
              src={"/cost.png"}
              width={150}
              height={150}
              alt="Cost Effective"
              className="md:w-full md:h-full w-[90px] h-[90px]"
            />
          </div>
          <div className="md:py-4 py-2 flex flex-col md:justify-start md:items-start justify-center items-center">
            {" "}
            <h2 className="md:text-[30px] text-[20px] leading-8 font-medium text-white">
              Cost Effective
            </h2>
            <p className="md:text-[14px] text-[13px] md:text-start text-center md:px-0 px-4 leading-5 font-normal pt-2 text-white">
              Choose our cost-effective EV cab services for affordable,
              eco-friendly travel. With competitive pricing, reduced fuel
              expenses, and sustainable electric vehicles, we help you save
              money while minimizing your carbon footprint.
            </p>
          </div>
        </div>
        <div className="md:w-3/4 md:flex hidden justify-center">
          <img src={"/punch.png"} width={400} height={200} alt="PunchEV" />
        </div>
      </div>

      <div className="flex justify-center 2 border-2 p-2 border-dashed rounded-md  ">
        <div className="md:w-3/4 md:flex hidden justify-center">
          <img src={"/punch2.png"} width={400} height={200} alt="PunchEV" />
        </div>
        <div className="md:flex md:gap-4 md:px-12  md:justify-start border- items-center ">
          <div className="flex justify-center md:w-ful">
            {" "}
            <img
              src={"/comfort.png"}
              width={150}
              height={150}
              alt="Comfort"
              className="md:w-full md:h-full w-[90px] h-[90px]"
            />
          </div>
          <div className="md:py-4 py-2 flex flex-col md:justify-start md:items-start justify-center items-center">
            {" "}
            <h2 className="md:text-[30px] text-[20px] leading-8 font-medium text-white">
              Unmatched Convenience
            </h2>
            <p className="md:text-[14px] text-[13px] md:text-start text-center md:px-0 px-4 leading-5 font-normal pt-2 text-white">
              Experience the ultimate convenience with our EV cab services. Our
              modern electric vehicles offer a smooth, stress-free ride. With
              spacious interiors and top-notch service, we ensure a comfortable,
              relaxing journey every time
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-2 p-2 border-dashed rounded-md  ">
        <div className="md:flex md:gap-4 md:px-12  md:justify-start border- items-center ">
          <div className="flex justify-center md:w-ful">
            {" "}
            <img
              src={"/driver.webp"}
              width={150}
              height={150}
              alt="Elite Chauffeurs
"
              className="md:w-full md:h-full w-[90px] h-[90px]"
            />
          </div>
          <div className="md:py-4 py-2 flex flex-col md:justify-start md:items-start justify-center items-center">
            {" "}
            <h2 className="md:text-[30px] text-[20px] leading-8 font-medium text-white">
              Elite Chauffeurs
            </h2>
            <p className="md:text-[14px] text-[13px] md:text-start text-center md:px-0 px-4 leading-5 font-normal pt-2 text-white">
              Our elite chauffeurs deliver a premium travel experience with
              their expert driving skills and deep knowledge of local routes.
              Committed to safety and punctuality, they ensure a smooth,
              comfortable, and personalized journey every time.
            </p>
          </div>
        </div>
        <div className="md:w-3/4 md:flex hidden justify-center">
          <img src={"/punch.png"} width={400} height={200} alt="PunchEV" />
        </div>
      </div>
      <div className="flex  justify-center border-2 p-2 border-dashed rounded-md  ">
        <div className="md:w-3/4 md:flex hidden justify-center">
          <img src={"/punch2.png"} width={400} height={200} alt="PunchEV" />
        </div>
        <div className="md:flex  md:gap-4 md:px-12  md:justify-start border- items-center ">
          <div className="flex justify-center md:w-ful">
            {" "}
            <img
              src={"/saftey.png"}
              width={150}
              height={150}
              alt="Exceptional Safety"
              className="md:w-full md:h-full w-[90px] h-[90px]"
            />
          </div>
          <div className="md:py-4 py-2 flex flex-col md:justify-start md:items-start justify-center items-center">
            {" "}
            <h2 className="md:text-[30px] text-[20px] leading-8 font-medium text-white">
              Exceptional Safety
            </h2>
            <p className="md:text-[14px] text-[13px] md:text-start text-center md:px-0 px-4 leading-5 font-normal pt-2 text-white">
              Your safety is our top priority. Our EV cabs are equipped with
              advanced safety features, driven by professional, trained drivers.
              From regular vehicle maintenance to enhanced safety protocols, we
              ensure a secure, worry-free travel experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
