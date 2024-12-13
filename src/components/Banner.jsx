
import { useState, useEffect } from "react";
import Button from "./Button";
const Banner = () => {
  const [showText, setShowText] = useState(false);

  // Trigger the text appearance after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative  mx-4 rounded-2xl h-[550px] overflow-hidden">
      {/* Background GIF */}
      <img
        src={"/banner1.gif"}
        alt="Banner GIF"
        width={100}
        height={500}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay and text */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-start  md:items-center md:mt-16 mt-6">
        <h1
          className={`text-white text-4xl whitespace-nowrap  flex font-bold transition-opacity  duration-200 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Welcome to{" "}
          <p className="text-[#5c8ffc] pl-2   whitespace-nowrap">
            {" "}
            Ele<span className="text-[#33ae60]">kars</span>
          </p>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
