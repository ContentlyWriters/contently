"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/image/contently-logo.png";
import LargeNavbar from "./large-navbar";
import SmallNavbar from "./small-navbar";
import Link from "next/link";

const items = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Services", path: "/service",
    subItems: [
      { id: 21, name: "Do my assignment", path: "/service/do-my-assignment"},
      { id: 22, name: "Personal Statement", path: "/service/personal-statement"},
      { id: 23, name: "Buy a research paper", path: "/service/buy-a-research-paper"},
      { id: 26, name: "Coursework Writing", path: "/service/coursework-writing"},
      { id: 27, name: "Dissertation", path: "/service/dissertation"},
      { id: 28, name: "Essay Services", path: "/service/essay-service"},
      { id: 29, name: "Homework", path: "/service/homework"},
      {
        id: 30, 
        name: "Assignment in UK", 
       path: "",
        subItems: [
          {id: 3011, name: "Oxford", path: "/service/assignment-in-uk/oxford"},
          {id: 3022, name: "London", path: "/service/assignment-in-uk/london"}
        ]
      },
      {
        id: 31, 
        name: "Assignment in USA", 
        path: "",
        subItems: [
          {id: 3111, name: "California", path: "/service/assignment-in-usa/california"}
        ]
      },

      { id: 32, name: "Other Subjects & Services", path: "/service/other-subjects-and-services"},    
    ] 
  },


  { id: 3, name: "Subjects", path: "", 
    subItems: [
      { id: 32, name: "Management", path: "/subject/management"},
      { id: 33, name: "Accounting", path: "/subject/accounting"},
      { id: 34, name: "Engineering Studies", path: "/subject/engineering-studies"},
      { id: 35, name: "Information Technology", path: "/subject/information-technology"},
      { id: 36, name: "Law", path: "/subject/law"},
      { id: 37, name: "Statistics", path: "/subject/statistics"}
    ] 
  },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "About us", path: "/about" },
  { id: 6, name: "Contact", path: "/contact" },
];


function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);  // Update state when page is scrolled
      } else {
        setIsScrolled(false); // Reset when at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      className={`px-1 sm:!px-10 lg:!px-[50px] bg-[#FFFFFF] sm:px-4 !w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md shadow-black/30" : ""
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-0 sm:py-1">
        <Link href="/">
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt="Pangram Logo"
              className="h-[70px] w-[160px] sm:h-[80px] sm:w-[180px]"
              priority={true}
            />
          </div>
        </Link>
        <LargeNavbar items={items} />
        <SmallNavbar items={items} />
      </div>
    </div>
  );
}

export default NavBar;
