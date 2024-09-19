"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/image/contently-logo.png";
import LargeNavbar from "./large-navbar";
import SmallNavbar from "./small-navbar";
import Link from "next/link";

const items = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Service", path: "/service" },
    { id: 3, name: "Subject", path: "/subject" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "About us", path: "/about" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

function NavBar() {
  return (
    <div className="px-1 sm:!px-10 lg:!px-[50px] bg-[#FFFFFF] sm:px-4 !w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1280px] mx-auto  flex justify-between items-center py-1 sm:py-2">
        <Link href="/">
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt="Pangram Logo"
              className="h-[70px] w-[160px] sm:h-[80px] sm:w-[180px]"
            />
          </div>
        </Link>
        <LargeNavbar items={items}  />
        <SmallNavbar items={items}  />
      </div>
    </div>
  );
}

export default NavBar;
