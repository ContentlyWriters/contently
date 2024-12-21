"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Use 'next/navigation'
import { useUserContext } from "@/context/auth";
import Image from "next/image";
import image5 from "@/assets/image/merry.png";

const Popup = () => {
  const { user, isAuthenticated } = useUserContext();
  const [showPopup, setShowPopup] = useState(false);
  const [couponPopup, setCouponPopup] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [clickedGetDiscount, setClickedGetDiscount] = useState(false); // Track if the user clicked the button
  const router = useRouter();

  useEffect(() => {
    // Check if the "Thanks for Joining" popup has already been shown
    const hasShownThanksPopup = localStorage.getItem("thanksPopupShown");

    if (!hasShownThanksPopup) {
      // Always show the first popup (no 3-day limit)
      setTimeout(() => {
        setShowPopup(true); // Show the first popup after 6 seconds
      }, 6000);
    }
  }, []);

  const handleClickGetDiscount = () => {
    setClickedGetDiscount(true); // Track if the button is clicked

    if (!isAuthenticated) {
      // If the user is not authenticated, redirect to login page
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } else {
      // If the user is authenticated, show the coupon popup
      setShowPopup(false);
      setCouponPopup(true);
    }
  };

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText("MERRY25").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  useEffect(() => {
    // This effect is to show "Thanks for Joining" popup when user logs in
    if (isAuthenticated && clickedGetDiscount) {
      // Check if the "Thanks for Joining" popup has already been shown
      const hasShownThanksPopup = localStorage.getItem("thanksPopupShown");

      if (!hasShownThanksPopup) {
        setTimeout(() => {
          setCouponPopup(true); // Show the "Thanks for Joining" popup after 7 seconds
          localStorage.setItem("thanksPopupShown", "true"); // Mark that the popup has been shown
        }, 7000); // Delay of 7 seconds
      }
    }
  }, [isAuthenticated, clickedGetDiscount]);

  return (
    <>
     {showPopup && !localStorage.getItem("thanksPopupShown") && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
    <div className="relative bg-[#fef6e4] shadow-lg rounded-r-[20px] rounded-l-[720px] h-[360px] w-[850px] p-12 flex flex-col justify-center items-center">
      {/* Close Button */}
      <button
  className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-[20px] bg-red-100 hover:bg-red-300 rounded-full w-6 h-6 flex items-center justify-center shadow-md transition-transform transform  focus:outline-none"
  onClick={() => setShowPopup(false)}
>
  &times;
</button>

      {/* Left Image Section */}
      <div className="absolute -left-[0px] w-[360px] h-[360px] bg-white flex items-center justify-center">
        <Image
          src={image5}
          alt="Christmas Offer"
          className="object-cover"
          width={360}
          height={360}
        />
      </div>

      {/* Content Section */}
      <div className="ml-[360px] text-center">
        {/* Heading */}
        <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
          <span className="text-red-600">
            Celebrate Christmas Discount! 🎁
          </span>{" "}
          <span className="text-gray-800">25% OFF on all Assignments</span>
        </h3>

      
        {/* Email Input and Button */}
        <div className="flex flex-col items-center">
          <input
            type="email"
            value={isAuthenticated ? user?.email : ""}
            readOnly={isAuthenticated}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border-2 border-green-500 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="bg-gradient-to-r from-red-600 to-green-600 hover:from-green-600 hover:to-red-600 w-[440px] text-white py-3 px-12 rounded-lg shadow-lg transition-transform transform "
            onClick={handleClickGetDiscount}
          >
            GET MY 25% OFF
          </button>
        </div>
      </div>
    </div>
  </div>
)}


      {/* Show "Thanks for Joining" popup only if it hasn't been shown already */}
      {couponPopup && !localStorage.getItem("thanksPopupShown") && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
    <div className="bg-[#fef6e4] p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
      <h3 className="text-3xl font-extrabold text-green-800">Thanks for Joining! 🎄</h3>
      <p className="text-red-600 mt-2 font-medium">Your coupon code is:</p>
      <div
        className="bg-gradient-to-r from-red-600 to-green-600 text-white text-xl font-bold py-2 px-4 rounded-md mt-4 cursor-pointer hover:from-green-600 hover:to-red-600 shadow-lg transform transition-transform"
        onClick={handleCopyCoupon}
      >
        MERRY25
      </div>
      {isCopied && (
        <p className="text-green-600 mt-2 text-sm font-semibold">Coupon code copied!</p>
      )}
      <button
        className="mt-4 text-sm text-blue-700 underline hover:text-blue-900 transition-colors"
        onClick={() => setCouponPopup(false)}
      >
        Close
      </button>
    </div>
  </div>
)}

    </>
  );
};

export default Popup;
