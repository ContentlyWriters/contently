"use client";
import React from "react";
import Image from "next/image";
import Steps from "@/assets/image/Consulting-rafiki.svg";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import { MdCreditScore } from "react-icons/md";

export default function AssignmentSteps() {

  function scrollToSection() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, 10);
  }
  return (
    <>
<div className="px-4 sm:!px-10 lg:!px-[50px] ">
  <div className="max-w-[1280px] mx-auto">
    {/* Section Heading */}
    <h2 className="sm:text-4xl text-2xl font-semibold sm:text-center text-left px-2 sm:py-8 py-2 sm:tracking-wide leading-snug sm:mt-8  mt-5 text-gray-800">
      Simplify Your Assignment with Our Content Writing Services
    </h2>

    {/* Decorative Image */}
    <Image
      src={Steps}
      alt="Assignment Steps"
      width={680}
      height={400}
      className="mx-auto -mb-8 sm:-mb-4 lg:-mb-4"
    />

    {/* Horizontal Steps Section */}
    <div className="relative my-6 sm:my-8 lg:my-8">
      {/* Horizontal Line */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-pink-500"></div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={item.title}
            className="relative flex flex-col  sm:text-left lg:text-left bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform "
          >
          

             {/* Content */}
            <h3 className="mt-10 text-xl font-semibold sm:text-left lg:text-center text-left text-gray-700">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-gray-600 sm:text-left lg:text-center text-left leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


    <div className="px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-[1200px] mx-auto py-16">
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
          {/* Zero Plagiarism Section */}
          <div className="flex items-start gap-6 border-l-4 border-[#5b6cf2] pl-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5b6cf2] text-white">
              <FaCheckCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-white mb-2">
                Zero Plagiarism
              </h4>
              <p className="leading-relaxed">
                Every essay is thoroughly checked for plagiarism before being
                delivered, ensuring 100% original content.
              </p>
            </div>
          </div>

          {/* Money-back Guarantee Section */}
          <div className="flex items-start gap-6 border-l-4 border-[#5b6cf2] pl-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5b6cf2] text-white">
              <MdCreditScore className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-white mb-2">
                Money-back Guarantee
              </h4>
              <p className="leading-relaxed">
                If there&#39;s any issue with your order, the full amount will
                be refunded promptly and without hassle.
              </p>
            </div>
          </div>
        </div>

    {/* Call-to-Action */}
    <div className="mt-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
        <span className="text-[#5b6cf2]">Get work done from</span>{" "}
        <span className="text-white">the Experts</span>
      </h2>
      <button
        className="bg-[#5b6cf2] text-white lg:py-4 lg:px-10 px-6 py-2 rounded-full lg:text-lg text-md font-medium hover:bg-white hover:text-black transition-colors duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Get Started
      </button>
    </div>
  </div>
</div>






      <div className="px-4 sm:!px-10 lg:!px-[50px] ">
        <div className="max-w-[1280px] mx-auto bg-[#f8f8f8] my-10 p-10 text-lg rounded-lg px-3 sm:px-8">
          <p>
            Here at{" "}
            <span className="text-[#5b6cf2] sm:text-4xl text-4x1  font-semibold">
              Contently Writers
            </span>
            , we provide a platform for users looking to get their best assignment services, essays, homework, or projects completed at minimal charges. We suggest trying our online assignment helper services for their efficiency and the quality of work done, always keeping users&#39; best interests in mind. Our writers are highly skilled and experienced in handling these tasks, ensuring your important work is in capable and reliable hands.
          </p>
          <Button onClick={scrollToSection} className="uppercase rounded-full mt-5 " size="lg" type="button"  >
            Get Started Now
          </Button>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    title: "Step 1",
    description:
      "Fill out the required details in the form and format your assignment as per the provided guidelines. Upload the pdf file with your assignment and any necessary references. Once complete, click the 'Write my assignment' button below to proceed.",
  },
  {
    title: "Step 2",
    description:
      "You will be directed to the payment portal. After filling the required information, you can proceed with the payment gateway to confirm your order. If you face any issues with payments, please visit our Contact page for assistance.",
  },
  {
    title: "Step 3",
    description:
      "Your orders will be saved in your dashboard. For assignment issues, contact us via the details on the Contact page or use the feedback option in your dashboard. For website or assignment process queries, visit the FAQ section. We're here to help!",
  },
];
