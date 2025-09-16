import React from "react";
import Button from "../reusable/Button";
import Link from "next/link";

export default function Banner() {
  return (
    <div
      style={{ backgroundImage: "url('/image/bannerImage.png')" }}
      className="bg-cover bg-no-repeat bg-center py-40 text-center rounded-b-4xl"
    >
      <div className="p-10 space-y-3">
        <h1 className="text-[50px] lg:text-[64px] text-[#FFF] font-bold leading-[130%]">
          Cruise the City in Comfort & Style
        </h1>
        <p className="text-lg text-[#FFF] leading-[160%] pb-3">
          Looking for a fun, flexible way to explore the city? Our golf cart
          fleet offers a unique twist on urban travel — <br /> perfect for
          sightseeing, events, and unforgettable experiences.
        </p>
        <Link href={'#rideBook'}>
        <Button text="Book Your Ride" />
        </Link>
      </div>
    </div>
  );
}
