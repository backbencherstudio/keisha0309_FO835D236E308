import React from "react";
import image1 from "@/public/image/EDAB6B15-011A-42B4-B5B2-BB7711938479.png";
import image2 from "@/public/image/E14E3145-72C0-46CA-BB1F-AF24BD26CB35 (1).png";
import image3 from "@/public/image/2059B52B-57AF-4F05-A96A-1500FB75DCCF.png";
import image4 from "@/public/image/AF0130C2-7AFA-4688-9D93-1417700484A5 (1).png";
import image5 from "@/public/image/B01AD943-9524-410C-B321-7BD4BB97703D (1).png";
import image6 from "@/public/image/BE50BC95-3583-40A6-8B83-2B35AB9BAF66 (1).png";
import image7 from "@/public/image/85EE8114-AC7D-4C34-B18C-743A0950B08A.png";
import Image from "next/image";
import Button from "../reusable/Button";
import Link from "next/link";

export default function CelebratingLife() {
  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 space-y-10 py-[60px] md:py-[100px]">
      {/* Top */}
      <div className="flex flex-col xl:flex-row items-center gap-8 lg:gap-12">
        {/* Images Section */}
        <div className="flex flex-col gap-3.5 w-full lg:w-1/2">
          {/* Top row */}
          <div className="flex gap-3.5">
            <Image
              src={image1}
              alt="img"
              className="rounded-2xl w-1/2 object-cover"
            />
            <Image
              src={image2}
              alt="img"
              className="rounded-2xl w-1/2 object-cover"
            />
          </div>

          {/* Bottom row */}
          <div className="flex gap-3.5 flex-col sm:flex-row">
            {/* Left column */}
            <div className="flex flex-col gap-3.5 flex-1">
              <Image
                src={image3}
                alt="img"
                className="rounded-2xl object-cover w-full"
              />
              <Image
                src={image6}
                alt="img"
                className="rounded-2xl object-cover w-full"
              />
            </div>

            {/* Middle */}
            <Image
              src={image4}
              alt="img"
              className="rounded-2xl object-cover flex-1"
            />

            {/* Right column */}
            <div className="flex flex-col gap-3.5 flex-1">
              <Image
                src={image5}
                alt="img"
                className="rounded-2xl object-cover w-full"
              />
              <Image
                src={image7}
                alt="img"
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[130%]">
              Celebrating Life, <br className="hidden sm:block" /> One Ride at a
              Time
            </h1>
            <p className="text-[#4A4C56] leading-[160%] text-base sm:text-lg">
              Our gallery captures the moments that make every ride special.
              From lively festivals to city tours, each photo reflects comfort,
              style, and the joy of exploring. Memories are made here — one ride
              at a time.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href={"#contact"}>
                <Button text="Contact Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
