import React from "react";
import Map from "../reusable/Map";
import Button from "../reusable/Button";
import image1 from "@/public/image/image 3 (1).png";
import image2 from "@/public/image/image 3 (2).png";
import image3 from "@/public/image/image 3 (3).png";
import Image from "next/image";

const serviceAreas = [
  {
    id: 1,
    title: "Victory Park, Dallas",
    description: "We proudly serve vibrant neighborhoods across Dallas and Houston.",
    img: image1,
  },
  {
    id: 2,
    title: "Fair Park, Dallas",
    description: "We proudly serve vibrant neighborhoods across Dallas and Houston.",
    img: image2,
  },
  {
    id: 3,
    title: "Downtown Houston",
    description: "We proudly serve vibrant neighborhoods across Dallas and Houston.",
    img: image3,
  },
];

export default function InteractiveServiceMap() {
  return (
    <section className="w-full py-10 lg:py-20">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start px-4">
        {/* LEFT SIDE - Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-[130%]">
            Interactive Service Map
          </h1>
          <p className="text-lg leading-[160%] text-gray-600">
            We proudly serve vibrant neighborhoods across Dallas and Houston,
            offering a stylish and convenient way to explore the city.
          </p>

          {/* Service Cards */}
          <div className="space-y-4">
            {serviceAreas.map((area) => (
              <div
                key={area.id}
                className="flex items-center gap-4 p-4 bg-[#F6F8FA] rounded-xl shadow hover:shadow-lg transition"
              >
                <Image
                  src={area.img}
                  alt={area.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                  <p className="text-sm text-gray-500">{area.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra info + button */}
          <div className="flex items-center gap-3 pt-4">
            <span className="w-4 h-4 border rounded-full flex items-center justify-center">
              <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
            </span>
            <span className="text-gray-600">Any other service zones</span>
          </div>

          <Button text="Contact Us" />
        </div>

        {/* RIGHT SIDE - Map */}
        <div className="w-full h-full rounded-lg overflow-hidden shadow">
          <Map />
        </div>
      </div>
    </section>
  );
}
