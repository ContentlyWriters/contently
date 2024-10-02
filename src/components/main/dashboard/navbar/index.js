"use client"; // Ensure this component is treated as a Client Component

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaPlusCircle, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import logo from "@/assets/image/contently-logo.png";

export default function NavbarDashBoard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  return (
    <div>
      {/* Navbar */}
      <div className="md:px-6 px-2 py-1 bg-gray-100 shadow-lg fixed w-full top-0 z-50 ">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link href={"/"} className="flex-shrink-0">
            <Image src={logo} alt="logo" width={180} height={60}  /> 
          </Link>

          {/* Hamburger Icon for Small Screens */}
          <div className="sm:hidden flex items-center ml-auto px-4">
            <button onClick={toggleMenu} className="text-black">
              <FaBars size={24} />
            </button>
          </div>

          {/* Navigation Links for larger screens */}
          <div className="hidden sm:flex items-center gap-6 text-black text-sm sm:text-base font-medium">
            <Link
              className="flex items-center gap-2 hover:text-[#5b6cf2] transition-colors duration-300"
              href={"/dashboard"}
            >
              <FaShoppingCart /> My Orders
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-[#5b6cf2] transition-colors duration-300"
              href={"/"}
            >
              <FaPlusCircle /> New Order
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-[#5b6cf2] transition-colors duration-300"
              href="mailto:info@contentlywriters.com"
            >
              <FaEnvelope /> Free Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#fff] text-black w-64 transform transition-transform duration-300 ease-in-out z-50  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-black">
          <FaTimes size={24} />
        </button>

        {/* Sidebar Menu Links */}
        <div className="flex flex-col items-start mt-16 p-4">
          <Link
            className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-300 py-4 text-lg"
            href={"/dashboard"}
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            <FaShoppingCart /> My Orders
          </Link>
          <Link
            className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-300 py-4 text-lg"
            href={"/"}
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            <FaPlusCircle /> New Order
          </Link>
          <Link
            className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-300 py-4 text-lg"
            href="mailto:info@contentlywriters.com"
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            <FaEnvelope /> Free Inquiry
          </Link>
        </div>
      </div>

      {/* Background overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white opacity-100 z-40"
          onClick={toggleMenu} // Close the menu when clicking outside
        ></div>
      )}
    </div>
  );
}
