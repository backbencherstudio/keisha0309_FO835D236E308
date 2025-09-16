import React from "react";
import logo from "@/public/image/navImage.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div
     id="contact"
      className="h-[600px] bg-no-repeat flex flex-col justify-end"
      style={{
        backgroundImage:
          "url('/image/EDAB6B15-011A-42B4-B5B2-BB7711938479 (1).png')",
      }}
    >
      <div className="w-full bg-white pt-12 pb-8 px-4  flex flex-col text-center justify-center items-center rounded-t-4xl">
        {/* Logo */}
        <Image src={logo} height={100} width={111} alt="img" />
        <p className="text-lg leading-[160%] pt-8 ">
          Phone number:{" "}
          <span className="text-[#777980] text-lg">(469) 900-9019</span>
        </p>
        <p className="text-lg leading-[160%]">
          Email:{" "}
          <span className="text-[#777980] text-lg">
            scottstransportation@gmail.com
          </span>
        </p>
        <p className="text-lg leading-[160%] pt-6">
          Phone call:{" "}
          <span className="text-[#777980] text-lg">
            311 to report directly to the City of Dallas (Ord. 29696)
          </span>
        </p>
        <p className="text-[#777980] text-lg pt-9">
          We are committed to maintaining a safe, drug-free environment for both
          our <br /> customers and drivers — 365 days a year, rain or shine.
        </p>
      </div>

      <div className="w-full bg-[#841315] py-3.5 px-4 text-[#FFF] text-sm">
        <div className="w-full max-w-[1320px] mx-auto flex justify-between items-center">
          <p>©2025 National Carts</p>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
