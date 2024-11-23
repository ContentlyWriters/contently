"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router"; // Correct import
import Image from "next/image";
import image1 from "@/assets/image/Blog post-amico.svg";
import image2 from "@/assets/image/Maintenance-bro.svg";
import image3 from "@/assets/image/Safe-bro.svg";
import image4 from "@/assets/image/Refund-bro.svg";
import image5 from "@/assets/image/logo.png"; // Add your logo path here

const About = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [couponPopup, setCouponPopup] = useState(false); // Add state for coupon popup
  const [isCopied, setIsCopied] = useState(false); // State for copy confirmation
  const [user, setUser] = useState({ email: "" }); // Simple user state for demo
  const [router, setRouter] = useState(null); // State to store router
  const [isClient, setIsClient] = useState(false); // State to check if it's client-side

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true); // Show the popup after 6 seconds
    }, 6000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleGetCoupon = () => {
    if (user?.email) {
      // If user is logged in, directly show coupon popup
      setShowPopup(false);
      setCouponPopup(true);
    } else {
      // Redirect to login page if not logged in
      router.push("/login");
    }
  };

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText("SAVE20").then(() => {
      setIsCopied(true); // Set copied state to true
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };


  return (
    <div>
      <div className="bg-[#020035] py-8">
        <h1 className="text-[#FFFFFF] sm:text-[50px] lg:text-[80px] text-[40px] text-center pt-20 mx-auto font-semibold">
          About us
        </h1>
        <p className="text-[#FFFFFF] text-[25px] text-center pt-10 mb-8 mx-auto">
          Let&#39;s explore and deepen our connection.
        </p>
        <div className="h-[7px] w-[150px] bg-[#5b6cf2] mx-auto"></div>
      </div>

      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="pt-8">
            <h2 className="text-center text-[40px] sm:text-[50px] lg:text-[60px] font-semibold mx-auto">
              Writers and AI writers
            </h2>
            <p className="text-center mx-auto text-[18px] sm:text-[14px] lg:text-[18px]">
              Contently Writers are highly skilled at tackling any challenge you may encounter. For those in need of a quick assignment with less focus on quality, we also offer AI content writing and review services.
            </p>
          </div>

          <div className="my-2">
            <div className="grid gap-10 sm:gap-1">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center items-center ${
                    Number(index) % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  } sm:flex-col`}
                >
                  <div className="flex justify-center flex-col md:w-[50%] w-full px-2">
                    <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold pb-5 md:text-start text-center">
                      {item.title}
                    </h3>
                    <p className="md:text-start text-[18px] text-center text-[#3d3d3d]">
                      {item.about}
                    </p>
                  </div>

                  <div className="flex justify-center items-center md:w-[50%] w-full">
                    <Image
                      src={item.image}
                      alt="Image"
                      className="w-full sm:max-w-[280px] lg:max-w-[380px] object-contain hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 border-gray-200 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-[50px] text-center">
          <h2 className="text-gray-800 text-[30px] sm:text-[35px] lg:text-[40px] font-bold">
            About Our Writers
          </h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] lg:text-[20px] mt-4 leading-relaxed">
            Our writers come from diverse educational backgrounds, including alumni of
            prestigious universities. With decades of combined experience, they deliver
            unparalleled expertise to every project. Explore their profiles on our
            <a
              href="https://www.linkedin.com/company/facio-contently-writers/posts/?feedView=all"
              className="text-blue-600 ml-1 underline hover:text-blue-800 transition-colors duration-200"
              target="_blank"
            >
              LinkedIn page
            </a>.
          </p>
        </div>
      </div>

     {/* Coupon Popup */}
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
                <span className="text-blue-600 font-extrabold">GET 20% OFF</span> YOUR FIRST ORDER
              </h3>
              <div className="flex flex-col items-center">
                <input
                  type="email"
                  value={user?.email || ""}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#5b6cf2]"
                  readOnly={!!user?.email} // Make field readonly if email is available
                />
                <Button
                  className="bg-[#5b6cf2] hover:bg-[#3e54d6] w-[440px] text-white py-6 px-12 rounded-lg transition-transform transform"
                  onClick={handleGetCoupon}
                >
                  GET MY 20% OFF
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Small Coupon Popup */}
      {couponPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h3 className="text-2xl font-bold text-gray-800">Thanks for Joining!</h3>
            <p className="text-gray-600 mt-2">Your coupon code is:</p>
            <div
              className="bg-[#5b6cf2] text-white text-xl font-bold py-2 px-4 rounded-md mt-4 cursor-pointer hover:bg-[#3e54d6] transition"
              onClick={handleCopyCoupon}
            >
              SAVE20
            </div>
            {isCopied && (
              <p className="text-green-600 mt-2 text-sm">Coupon code copied!</p>
            )}
            <button
              className="mt-4 text-sm text-blue-600 underline hover:text-blue-800 transition"
              onClick={() => setCouponPopup(false)} // Close small popup
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default About;

const data = [
  {
    title: "Blog",
    about:
      "Contently Writers, as a brand, is currently in its early stages of development. While all our services are available and fully operational, we recognize that there is still room for improvement. We have many updates planned for overall enhancement and will begin implementing them soon. For any questions or to stay updated with our services, please refer to our blog.",
    image: image1,
  },
  {
    title: "Issues and remarks",
    about:
      "We have an active and responsive system designed around our users' needs when interacting with the website. If you encounter any technical difficulties or issues, please let us know, and we will get in touch with you as soon as possible.",
    image: image2,
  },
  {
    title: "Accounts",
    about:
      "All information related to accounts used for sign-up, payment, or reviews is completely protected and will not be shared with any third party that could cause you any inconvenience.",
    image: image3,
  },
  {
    title: "Payments and refunds",
    about:
      "We offer various policies related to refunds, discounts, and payment methods. For more information, please visit our policies page.",
    image: image4,
  },
];
