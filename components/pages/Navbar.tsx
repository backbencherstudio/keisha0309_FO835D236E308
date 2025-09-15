import React from "react";
import Image from "next/image";
import logo from "@/public/image/navImage.png";
import Button from "../reusable/Button";

// Main Navbar component
export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full max-w-[1320px] mx-auto px-4 py-6">
        {/* Logo */}
        <Image src={logo} alt="img" />

        {/* Button */}
        <Button text="Contact Us" />
      </div>
    </div>
  );
}
