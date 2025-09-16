import React from "react";
import Image from "next/image";
import logo from "@/public/image/navImage.png";
import Button from "../reusable/Button";
import Link from "next/link";

// Main Navbar component
export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full max-w-[1320px] mx-auto px-4 py-6">
        {/* Logo */}
        <Image src={logo} height={100} width={111} alt="img" />

        {/* Button */}
        <Link href={"#contact"}>
          <Button text="Contact Us" />
        </Link>
      </div>
    </div>
  );
}
