/* eslint-disable react/no-unescaped-entities */
import EnjoyIcon from "@/public/icon/EnjoyIcon";
import MapBookIcon from "@/public/icon/MapBookIcon";
import SecurityIcon from "@/public/icon/SecurityIcon";
import WatchIcon from "@/public/icon/WatchIcon";
import React from "react";

export default function WhyChooseOurService() {
  // Sample JSON data for service features
  const serviceFeatures = [
    {
      id: 1,
      title: "Cruise the City in Comfort & Style",
      description:
        "Looking for a fun, flexible way to explore the city? Our golf cart fleet offers a unique twist on urban travel — perfect for sightseeing, events, and unforgettable experiences.",
      icon: <MapBookIcon />,
    },
    {
      id: 2,
      title: "Cruise the City in Comfort & Style",
      description:
        "Looking for a fun, flexible way to explore the city? Our golf cart fleet offers a unique twist on urban travel — perfect for sightseeing, events, and unforgettable experiences.",
      icon: <EnjoyIcon />,
    },
    {
      id: 3,
      title: "Cruise the City in Comfort & Style",
      description:
        "Looking for a fun, flexible way to explore the city? Our golf cart fleet offers a unique twist on urban travel — perfect for sightseeing, events, and unforgettable experiences.",
      icon: <SecurityIcon />,
    },
    {
      id: 4,
      title: "Cruise the City in Comfort & Style",
      description:
        "Looking for a fun, flexible way to explore the city? Our golf cart fleet offers a unique twist on urban travel — perfect for sightseeing, events, and unforgettable experiences.",
      icon: <WatchIcon />,
    },
    {
      id: 5,
      title: "Cruise the City in Comfort & Style",
      description:
        "Looking for a fun, flexible way to explore the city? Our golf cart fleet offers a unique twist on urban travel — perfect for sightseeing, events, and unforgettable experiences.",
      icon: <WatchIcon />,
    },
  ];

  // Get first 3 cards
  const firstRowCards = serviceFeatures.slice(0, 3);
  
  // Get next 2 cards
  const secondRowCards = serviceFeatures.slice(3, 5);

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-14 md:py-[100px] text-center space-y-20">
      <div>
        <h1 className="text-[48px] font-semibold leading-[130%]">
          Why Choose Our Service?
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We're committed to providing the best golf cart experience in Dallas
          and Houston
        </p>
      </div>

      {/* First row with 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-6">
        {firstRowCards.map((feature) => (
          <div
            key={feature.id}
            className="relative bg-[#F8FAFB] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[-40px] text-4xl mb-6 bg-[#F6F8FA] border-4 border-white p-4 rounded-full w-20 h-20 flex items-center justify-center">
              {feature.icon}
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second row with 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6 max-w-4xl mx-auto pt-5">
        {secondRowCards.map((feature) => (
          <div
            key={feature.id}
            className="relative bg-[#F8FAFB] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[-40px] text-4xl mb-6 bg-[#F6F8FA] border-4 border-white p-4 rounded-full w-20 h-20 flex items-center justify-center">
              {feature.icon}
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}