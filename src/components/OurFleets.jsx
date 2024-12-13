import React from "react";
import OurFleetsCard from "./OurFleetsCard";
import ComponentHeader from "./ComponentHeader";
const data = [
  {
    id: 1,
    title: "Tata Punch EV",
    image: "/punchev.webp",
    content:
      "The Tata Punch EV offers a bold and eco-friendly ride with its compact SUV design. Equipped with spacious interiors and advanced safety features, it’s perfect for city commutes or weekend getaways. Enjoy smooth, zero-emission driving in this stylish and rugged electric vehicle, combining performance and sustainability for an ideal travel experience.",
  },
  {
    id: 2,
    title: "Tata Tiago EV",
    image: "/tiagoev.jpg",
    content:
      "The Tata Tiago EV brings comfort, efficiency, and sustainability together. This compact electric hatchback is designed for city life, offering a seamless and quiet drive with ample cabin space and smart technology. With its quick charging capability and eco-conscious design, the Tiago EV ensures an affordable and environmentally responsible way to travel.",
  },
  {
    id: 3,
    title: "Tata Curvv EV ",
    image: "/curvvev.webp",
    content:
      "The Tata Curvv EV is a futuristic, dynamic SUV designed to turn heads. With its sleek design, advanced technology, and all-electric powertrain, the Curvv EV delivers a high-performance and eco-friendly driving experience. Its luxurious interiors, combined with cutting-edge safety features, make it perfect for those seeking a premium, sustainable ride.",
  },
];
export default function OurFleets() {
  return (
    <>
      <ComponentHeader title={"Our Fleets"} />
      <div className="flex md:justify-center justify-start px-4 items-center pb-6 overflow-x-scroll hide-scrollbar gap-4 shadow-xl ">
        {data.map((car) => (
          <div key={car.id} className="flex hover:shadow-2xl shadow-white">
            <OurFleetsCard
              title={car.title}
              content={car.content}
              image={car.image}
            />
          </div>
        ))}
      </div>
    </>
  );
}
