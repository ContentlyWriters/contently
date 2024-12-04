"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image1 from "@/assets/image/Blog post-amico.svg";
import image2 from "@/assets/image/Maintenance-bro.svg";
import image3 from "@/assets/image/Safe-bro.svg";
import image4 from "@/assets/image/Refund-bro.svg";
import image5 from "@/assets/image/logo.png"; // Add your logo path here

const About = () => {

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#020035] py-8">
        <h1 className="text-[#FFFFFF] sm:text-[50px] lg:text-[80px] text-[40px] text-center pt-20 mx-auto font-semibold">
          About Us
        </h1>
        <p className="text-[#FFFFFF] sm:text-[22px] md:text-[26px] text-[20px] text-center pt-6 sm:pt-10 mb-8 mx-auto">
          Let&#39;s explore and deepen our connection.
        </p>
        <div className="h-[7px] w-[150px] bg-[#5b6cf2] mx-auto"></div>
      </div>
  
      {/* Main Content */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="pt-8">
            <h2 className="lg:text-center sm:text-left text-[40px] sm:text-[50px] lg:text-[60px] font-semibold mx-auto text-gray-900">
              Writers and AI Writers
            </h2>
            <p className="lg:text-center sm:text-left mx-auto text-[18px] sm:text-[14px] lg:text-[18px] text-gray-700 mt-4">
              Contently Writers are highly skilled at tackling any challenge you may encounter. For those in need of a quick assignment with less focus on quality, we also offer AI content writing and review services.
            </p>
          </div>
  
          <div className="my-12">
            <div className="grid gap-10 sm:gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center items-center ${
                    Number(index) % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  } sm:flex-col`}
                >
                  <div className="flex justify-center flex-col md:w-[50%] w-full px-2">
                    <h3 className="lg:text-4xl sm:text-4xl text-3xl lg:font-bold md:font-bold font-semibold pb-5 md:text-start sm:text-left lg:text-left text-gray-900">
                      {item.title}
                    </h3>
                    <p className="md:text-start text-[18px] sm:text-center lg:text-left text-[#3d3d3d] leading-relaxed">
                      {item.about}
                    </p>
                  </div>
  
                  <div className="flex justify-center items-center md:w-[50%] w-full mt-4 sm:mt-2">
                    <Image
                      src={item.image}
                      alt="Image"
                      className="w-full sm:max-w-[280px] lg:max-w-[385px] object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  
      {/* About Our Writers Section */}
      <div className="py-14 border-t border-gray-200 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-[50px] lg:text-center sm:text-left">
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


