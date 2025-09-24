"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; 
import Image from "next/image";
import image5 from "@/assets/image/pop-up(1).jpg";

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
    navigator.clipboard.writeText("FIRST20").then(() => {
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
  <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
    <div className="relative bg-[#ffffff] shadow-lg rounded-lg lg:rounded-l-full  md:lg:rounded-l-full  flex flex-col lg:flex-row justify-center items-center w-[95%] max-w-[850px] h-auto lg:h-[356px]">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 text-[16px] sm:text-[20px] bg-blue-100 hover:bg-blue-300 rounded-full w-6 h-6 flex items-center justify-center shadow-md transition-transform focus:outline-none"
        onClick={() => setShowPopup(false)}
      >
        &times;
      </button>

      {/* Image Section */}
      <div className="w-[150px] h-[150px] mt-4 lg:mt-0 md:mt-0 lg:w-[340px] lg:h-[340px]  lg:-ml-10 md:lg:-ml-10 overflow-hidden rounded-full flex items-center justify-center border-1 border-blue-300">
        <Image
          src={image5} // Replace with the new image with no background
          alt="New Year Image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="text-center p-6 sm:p-2 lg:p-4 w-full lg:w-1/2">
        <h3 className="text-md sm:text-3xl lg:text-[34px] font-extrabold text-gray-800 mb-4">
        <span className="text-blue-600 block sm:inline">
       Unlock 20% 
       </span>{" "}
      <span className="text-gray-800 block sm:inline">
      OFF Your First Order Today!
      </span>
        </h3>

        <div className="flex flex-col items-center">
          <input
            type="email"
            value={isAuthenticated ? user?.email : ""}
            readOnly={isAuthenticated}
            placeholder="Enter your email"
            className="w-full max-w-[300px] sm:max-w-[400px] px-4 py-2 text-sm sm:text-base border-2 border-blue-500 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="bg-black hover:border-b-4 hover:border-[#fff] border-b-4 border-[#5b6cf2] w-full max-w-[300px] sm:max-w-[400px] text-white text-sm sm:text-base py-2 sm:py-3 px-8 sm:px-12 rounded-lg shadow-lg transition-transform transform"
            onClick={handleClickGetDiscount}
          >
            Unlock My Discount
          </button>
        </div>
      </div>
    </div>
  </div>
)}





{/* Show "Thanks for Joining" popup only if it hasn't been shown already */}
      {couponPopup && !localStorage.getItem("thanksPopupShown") && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-[#ffffff] border-2 border-black p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
          <h3 className="text-3xl font-extrabold text-[#5b6cf2]">Thanks for Joining!</h3>
          <p className="text-black mt-2 font-medium">Your coupon code is:</p>
          <div
            className="bg-black  text-white text-xl font-bold py-2 px-4 rounded-md mt-4 cursor-pointer hover:border-b-4 hover:border-[#fff] border-b-4 border-[#5b6cf2] shadow-lg transform transition-transform"
            onClick={handleCopyCoupon}
          >
            FIRST20
          </div>
          {isCopied && (
            <p className="text-blue-600 mt-2 text-sm font-semibold">Coupon code copied!</p>
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