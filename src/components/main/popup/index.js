"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Use 'next/navigation'
import { useUserContext } from "@/context/auth";
import Image from "next/image";
import image5 from "@/assets/image/newyear.png";

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
    navigator.clipboard.writeText("YEAR25").then(() => {
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
  // <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
  //   <div className="relative bg-[#fef6e4] shadow-lg rounded-r-[20px] rounded-l-[20px] sm:rounded-none lg:rounded-none md:rounded-none p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row justify-center items-center w-[95%] max-w-[850px] h-auto lg:h-[360px]">
  //     {/* Close Button */}
  //     <button
  //       className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-[16px] sm:text-[20px] bg-red-100 hover:bg-red-300 rounded-full w-6 h-6 flex items-center justify-center shadow-md transition-transform transform focus:outline-none"
  //       onClick={() => setShowPopup(false)}
  //     >
  //       &times;
  //     </button>

  //     {/* Left Image Section */}
  //     <div className="lg:absolute rounded-sm lg:rounded-none md:rounded-none sm:rounded-none lg:-left-[0px] w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[360px] lg:h-[360px] bg-white flex items-center justify-center  overflow-hidden">
  //       <Image
  //         src={image5}
  //         alt="Christmas Offer"
  //         className="object-cover"
  //         width={360}
  //         height={360}
  //       />
  //     </div>

  //     {/* Content Section */}
  //     <div className="lg:ml-[360px] text-center mt-6 lg:mt-0">
  //       {/* Heading */}
  //       <h3 className="text-md sm:text-3xl lg:text-[34px] font-extrabold text-gray-800 mb-4">
  //         <span className="text-red-600 block sm:inline">
  //           New Year, New Goals 🎁
  //         </span>{" "}
  //         <span className="text-gray-800 block sm:inline">
  //            - 25% OFF to Get You Started!
  //         </span>
  //       </h3>

  //       {/* Email Input and Button */}
  //       <div className="flex flex-col items-center">
  //         <input
  //           type="email"
  //           value={isAuthenticated ? user?.email : ""}
  //           readOnly={isAuthenticated}
  //           placeholder="Enter your email"
  //           className="w-full max-w-[300px] sm:max-w-[440px] px-4 py-2 text-sm sm:text-base border-2 border-green-500 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
  //         />
  //         <button
  //           className="bg-gradient-to-r from-red-600 to-green-600 hover:from-green-600 hover:to-red-600 w-full max-w-[300px] sm:max-w-[440px] text-white text-sm sm:text-base py-2 sm:py-3 px-8 sm:px-12 rounded-lg shadow-lg transition-transform transform"
  //           onClick={handleClickGetDiscount}
  //         >
  //           GET MY 25% OFF
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative bg-[#e6f7ff] shadow-lg rounded-lg flex flex-col lg:flex-row justify-center items-center w-[95%] max-w-[850px] h-auto lg:h-[360px]">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 text-[16px] sm:text-[20px] bg-blue-100 hover:bg-blue-300 rounded-full w-6 h-6 flex items-center justify-center shadow-md transition-transform focus:outline-none"
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-[250px] lg:h-[360px] overflow-hidden rounded-l-lg">
          <img
            src={image5}// Replace with the actual path to your image
            alt="@/assets/image/newyear.png"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="text-center p-6 sm:p-8 lg:p-12 w-full lg:w-1/2">
          <h3 className="text-md sm:text-3xl lg:text-[34px] font-extrabold text-gray-800 mb-4">
            <span className="text-blue-600 block sm:inline">
              New Year, New Goals 🎆
            </span>{" "}
            <span className="text-gray-800 block sm:inline">
              - 25% OFF to Start Fresh!
            </span>
          </h3>

          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-[300px] sm:max-w-[400px] px-4 py-2 text-sm sm:text-base border-2 border-blue-500 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 w-full max-w-[300px] sm:max-w-[400px] text-white text-sm sm:text-base py-2 sm:py-3 px-8 sm:px-12 rounded-lg shadow-lg transition-transform transform"
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
  // <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
  //   <div className="bg-[#fef6e4] p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
  //     <h3 className="text-3xl font-extrabold text-green-800">Thanks for Joining! 🎄</h3>
  //     <p className="text-red-600 mt-2 font-medium">Your coupon code is:</p>
  //     <div
  //       className="bg-gradient-to-r from-red-600 to-green-600 text-white text-xl font-bold py-2 px-4 rounded-md mt-4 cursor-pointer hover:from-green-600 hover:to-red-600 shadow-lg transform transition-transform"
  //       onClick={handleCopyCoupon}
  //     >
  //       YEAR25
  //     </div>
  //     {isCopied && (
  //       <p className="text-green-600 mt-2 text-sm font-semibold">Coupon code copied!</p>
  //     )}
  //     <button
  //       className="mt-4 text-sm text-blue-700 underline hover:text-blue-900 transition-colors"
  //       onClick={() => setCouponPopup(false)}
  //     >
  //       Close
  //     </button>
  //   </div>
  // </div>

  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
  <div className="bg-[#e6f7ff] p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
    <h3 className="text-3xl font-extrabold text-blue-800">Thanks for Joining! 🎆</h3>
    <p className="text-blue-600 mt-2 font-medium">Your coupon code is:</p>
    <div
      className="bg-gradient-to-r from-blue-600 to-silver-600 text-white text-xl font-bold py-2 px-4 rounded-md mt-4 cursor-pointer hover:from-silver-600 hover:to-blue-600 shadow-lg transform transition-transform"
      onClick={handleCopyCoupon}
    >
      YEAR25
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
