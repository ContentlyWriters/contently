"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Use 'next/navigation'
import { useUserContext } from "@/context/auth";
import Image from "next/image";
import image5 from "@/assets/image/logo.png";

const Popup = () => {
  const { user, isAuthenticated } = useUserContext();
  const [showPopup, setShowPopup] = useState(false);
  const [couponPopup, setCouponPopup] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [clickedGetDiscount, setClickedGetDiscount] = useState(false); // Track if the user clicked the button
  const router = useRouter();

  useEffect(() => {
    // Check if the first popup has been shown in the last 3 days
    const lastShown = localStorage.getItem("popupLastShown");
    const currentTime = new Date().getTime();
    if (!lastShown || currentTime - lastShown > 3 * 24 * 60 * 60 * 1000) {
      // If more than 3 days have passed, show the popup
      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("popupLastShown", currentTime); // Save the current time
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
    navigator.clipboard.writeText("SAVE20").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  useEffect(() => {
    // This effect is to show "Thanks for Joining" popup when user logs in
    if (isAuthenticated && clickedGetDiscount) {
      setTimeout(() => {
        setCouponPopup(true); // Show the "Thanks for Joining" popup after 7 seconds
      }, 7000); // Delay of 7 seconds
    }
  }, [isAuthenticated, clickedGetDiscount]);

  return (
    <>
       {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative bg-white shadow-lg rounded-r-[20px] rounded-l-[720px] h-[360px] w-[1020px] p-12 flex flex-col justify-center items-center ">

            <button
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-[28px] -mt-4"
        onClick={() => setShowPopup(false)}
      >
        &times;
      </button>

      <div className="absolute -left-[0px] w-[360px] h-[360px] rounded-full bg-white flex items-center justify-center">
        <Image
          src={image5}
          alt="Logo"
          className="rounded-full object-cover"
          width={360}
          height={360}
        />
      </div>

            <div className="ml-[310px] text-center">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="text-blue-600">GET 20% OFF</span> YOUR FIRST ORDER
              </h3>
              <div className="flex flex-col items-center">
                <input
                  type="email"
                  value={isAuthenticated ? user?.email : ""}
                  readOnly={isAuthenticated}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg mb-4 focus:outline-none"
                />
                <button
                    className="bg-[#5b6cf2] hover:bg-[#3e54d6] w-[440px] text-white py-3 px-12 rounded-lg  transition-transform transform"

                  onClick={handleClickGetDiscount} // Call the function on click
                >
                  GET MY 20% OFF
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      {couponPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h3 className="text-2xl font-bold text-gray-800">Thanks for Joining!</h3>
            <p className="text-gray-600 mt-2">Your coupon code is:</p>
            <div
              className="bg-[#5b6cf2] text-white text-xl font-bold py-2 px-4 rounded-md mt-4 cursor-pointer hover:bg-[#3e54d6]"
              onClick={handleCopyCoupon}
            >
              SAVE20
            </div>
            {isCopied && (
              <p className="text-green-600 mt-2 text-sm">Coupon code copied!</p>
            )}
            <button
              className="mt-4 text-sm text-blue-600 underline hover:text-blue-800"
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
