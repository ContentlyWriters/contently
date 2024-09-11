"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/image/Consulting-rafiki.svg";
import { Button } from "@/components/ui/button";

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
        <h1 className="md:text-4xl text-4xl text-center py-10 mt-10" >Simplify Your Assignment with Our Content Writing Services</h1>
          <Image src={logo} alt="Assignment Steps" width={680} height={400} className="mx-auto" />
          <div className="grid md:grid-cols-3 sm:grid-cols-2  rounded-lg bg-[#f8f8f8] my-10">
            {data.map((item, index) => (
              <div
                key={item.title}
                className={`sm:p-8 px-4 py-6 ${
                  index === data.length - 1 &&
                  " md:col-span-1 sm:col-span-2 col-span-1"
                }`}
              >
                <p className="text-center font-semibold">{item.title}</p>
                <p className="text-sm opacity-80 pt-4 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      
      
      <div className="px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
    <div className="max-w-[1200px] mx-auto py-16 text-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

      {/* Zero Plagiarism Section */}
      <div className="bg-gray-900 rounded-lg p-8 shadow-lg transform transition-transform duration-300 hover:scale-105">
        <h4 className="text-[#003cff] text-3xl font-semibold mb-4">
          Zero Plagiarism
        </h4>
        <p className="text-gray-300 text-base leading-relaxed">
          Every essay is thoroughly checked for plagiarism before being delivered, ensuring 100% original content.
        </p>
      </div>

      {/* Money-back Guarantee Section */}
      <div className="bg-gray-900 rounded-lg p-8 shadow-lg transform transition-transform duration-300 hover:scale-105">
        <h4 className="text-[#003cff] text-3xl font-semibold mb-4">
          Money-back Guarantee
        </h4>
        <p className="text-gray-300 text-base leading-relaxed">
          If there&#39;s any issue with your order, the full amount will be refunded promptly.
        </p>
      </div>

    </div>

    {/* Call-to-Action */}
    <div className="mt-16">
      <h2 className="text-4xl font-semibold mb-6">
        <span className="text-[#003cff]">Get work done from</span>
        <span className="text-white"> the Experts</span>
      </h2>
      <button className="bg-[#003cff] text-white py-4 px-10 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Get Started
      </button>
    </div>
  </div>
</div>





      <div className="px-4 sm:!px-10 lg:!px-[50px] ">
        <div className="max-w-[1280px] mx-auto bg-[#f8f8f8] my-10 p-10 text-lg rounded-lg">
          <p>
            Here at{" "}
            <span className="text-[#003cff] text-4xl font-semibold">
              Contently Writers
            </span>
            , we provide a platform for users looking to get their best assignment services, essays, homework, or projects completed at minimal charges. We suggest trying our online assignment helper services for their efficiency and the quality of work done, always keeping users&#39; best interests in mind. Our writers are highly skilled and experienced in handling these tasks, ensuring your important work is in capable and reliable hands.
          </p>
          <Button onClick={scrollToSection}  className="uppercase rounded-full mt-5" size="lg" type="button" >
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
      "Complete the necessary details in the form provided, and format your assignment expert according to the specified guidelines. Upload the text file containing your assignment and any references required. Once these steps are finished, click the 'Write my assignment' button below to proceed.",
  },
  {
    title: "Step 2",
    description:
      "You will be directed to the payment portal. After entering the required information, you can proceed with the payment to confirm your order. If you encounter any issues with payments, please visit the Contact page for assistance.",
  },
  {
    title: "Step 3",
    description:
      "Any orders you place will be stored in your profile and/or sent to your email address. If you have any issues regarding the assignment after its completion, kindly refer to the Services section. If you have any questions about the website or the process of assignment completion, please check the FAQ page. If you need further assistance, feel free to ask, and we'll be happy to help me with assignment queries.",
  },
];
