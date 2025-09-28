"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import LargeNavbar from "./large-navbar";
import SmallNavbar from "./small-navbar";

const items = [
  { id: 1, name: "Home", path: "/" },
  {
    id: 2,
    name: "Services",
    path: "",
    subItems: [
      { id: 201, name: "SEO", path: "/service/seo" },
      { id: 202, name: "Content Writing", path: "/service/content-writing" },
      {
        id: 203,
        name: "Assignment Service",
        path: "",
        subItems: [
          { id: 21, name: "Do my assignment", path: "/service/do-my-assignment" },
          { id: 22, name: "Personal Statement", path: "/service/personal-statement" },
          { id: 23, name: "Buy a research paper", path: "/service/buy-a-research-paper" },
          { id: 26, name: "Coursework Writing", path: "/service/coursework-writing" },
          { id: 27, name: "Dissertation", path: "/service/dissertation" },
          { id: 28, name: "Essay Services", path: "/service/essay-service" },
          { id: 29, name: "Homework", path: "/service/homework" },
          {
            id: 30,
            name: "Assignment in UK",
            path: "",
            subItems: [
              { id: 3011, name: "Oxford", path: "/service/assignment-in-uk/oxford" },
              { id: 3022, name: "London", path: "/service/assignment-in-uk/london" },
            ],
          },
          {
            id: 31,
            name: "Assignment in USA",
            path: "",
            subItems: [
              { id: 3111, name: "California", path: "/service/assignment-in-usa/california" },
            ],
          },
          { id: 32, name: "Other Subjects & Services", path: "/service/other-subjects-and-services" },
        ],
      },
    ],
  },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "About us", path: "/about" },
  { id: 6, name: "Contact", path: "/contact" },
];

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Large screen navbar (fancy) */}
      <div
        className={`hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 z-50 
                    w-fit max-w-[90%] bg-[#000000]/90 backdrop-blur-md rounded-full 
                    transition-all duration-300 px-6 animated-border`}
      >
        <div className="flex justify-center items-center py-2 relative">
          <LargeNavbar items={items} />
        </div>
      </div>

      {/* Small screen navbar (simple white full width) */}
      <div className="block lg:hidden fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-2 py-1">
          {/* Left side - Logo / Site Name */}
         <div className="flex items-center">
      <Image 
        src="/contently-logo.png"  
        alt="Contently Writers Logo"
        width={500}
        height={500}
        className="h-14 w-auto"
      />
    </div>

          {/* Right side - Hamburger */}
          <SmallNavbar items={items} />
        </div>
      </div>
    </>
  );
}

export default NavBar;
