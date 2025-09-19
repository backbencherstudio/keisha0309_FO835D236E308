import React from "react";
import Image from "next/image";
import image1 from "@/public/image/Rectangle1.png";
import image2 from "@/public/image/Rectangle2.png";
import image3 from "@/public/image/Rectangle3.png";
import LocationIcon from "@/public/icon/LocationIcon";

export default function WhereWeOperate() {
  // JSON data for locations
  const locations = [
    {
      id: 1,
      title: "Victory Park – Dallas",
      address: "31N N Houston St, Dallas, TX 75219, USA",
      description:
        "A modern mix of entertainment, shopping, and dining. Our golf carts make it easy to hop between hotspots and enjoy the scene in style.",
      tags: [
        "Entertainment District",
        "Entertainment District",
        "Entertainment District ",
      ],
      image: image1,
    },
    {
      id: 2,
      title: "Fair Park – Dallas",
      address: "31N N Houston St, Dallas, TX 75219, USA",
      description:
        "Home to museums, art installations, and cultural events. With expansive grounds and historic charm, it's the perfect place to cruise comfortably.",
      tags: [
        "Entertainment District",
        "Entertainment District",
        "Entertainment District ",
      ],
      image: image2,
    },
    {
      id: 3,
      title: "Houston Hotspots",
      address: "31N N Houston St, Dallas, TX 75219, USA",
      description:
        "From downtown districts to scenic neighborhoods, our carts help you explore Houston's best — effortlessly and with a local touch.",
      tags: [
        "Entertainment District",
        "Entertainment District",
        "Entertainment District ",
      ],
      image: image3,
    },
  ];

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-10 md:py-20 text-center space-y-[32px]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <h1 className="flex-1 text-[48px] font-semibold leading-[130%] text-left">
        Where Do We Operate? 
        </h1>
        <p className="flex-1 text-lg leading-[160%] text-left text-gray-600">
          We proudly serve vibrant neighborhoods across Dallas and Houston,
          offering a stylish and convenient way to explore the city.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location) => (
          <div
            key={location.id}
            className="bg-[#F8FAFB] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6"
          >
            {/* Image */}
            <Image src={location.image} alt="img" className="w-full" />

            {/* Content */}
            <div className="text-left space-y-4 mt-6">
              <p className="text-2xl font-bold leading-[130%] mt-6 ">
                {location.title}
              </p>
              <p className="flex items-center gap-1">
                <LocationIcon />
                <span className="text-[#4A4C56] leading-[160%]">
                  3111 N Houston St, Dallas, TX 75219, USA
                </span>
              </p>
              <p className="text-gray-700 ">{location.description}</p>

              {/* Tags */}
              {/* <d  */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
