import React from "react";

export default function OurFleetsCard({ image, title, content }) {
  return (
    <div className="border-2 border-green-500 border-dotted min-w-[350px] max-w-[350px] md:w-[400px]  rounded-lg ">
      <div>
        <div className="p-2 ">
          <img
            src={image}
            width={400}
            height={400}
            alt={title}
            className="rounded-xl  min-h-[300px] max-h-[300px]"
          />
        </div>
        <div className="bg-white rounded-b-lg border-t-2 border-dotted border-blue-500 ">
          <h3 className="text-center pt-2  text-[16px] font-bold text-[#33ae60]">
            {title}
          </h3>
          <p className="md:text-[13px] text-[14px]  font-medium p-2 md:p-4 text-[#33ae60] text-center">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
