import React from "react";
import image1 from "@/assets/image/Blog post-amico.svg";
import image2 from "@/assets/image/Maintenance-bro.svg";
import image3 from "@/assets/image/Safe-bro.svg";
import image4 from "@/assets/image/Refund-bro.svg";

import Image from "next/image";

function About() {
  return (
    <div>
      <div className="bg-[#020035] py-8">
        <h1 className="text-[#FFFFFF] sm:text-[50px] lg:text-[80px] text-[40px] text-center pt-20 mx-auto font-semibold">
         About us
        </h1>
        <p className="text-[#FFFFFF] text-[25px] text-center pt-10 mb-8 mx-auto ">
          Let&#39;s explore and deepen our connection.
        </p>
        <div className="h-[7px] w-[150px] bg-[#1A0C87] mx-auto"></div>
      </div>
      <div className="px-4 sm:!px-10 lg:!px-[50px] ">
        <div className="max-w-[1280px] mx-auto">
          <div className="pt-8">
            <h2 className="text-center text-[60px] font-semibold mx-auto">
              Writers and AI writers
            </h2>
            <p className="text-center mx-auto text-[15px]">
            Contently Writers are highly skilled at tackling any challenge you may encounter. For those in need of a quick assignment with less focus on quality, we also offer AI content writing and review services.
            </p>
          </div>
          <div className="my-10">
            <div className="grid sm:!gap-1 gap-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col  
              justify-center items-center 
       
              ${
                Number(index) % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"
              } `}
                >
                  <div className={`flex justify-center flex-col md:w-[50%] `}>
                    <h3 className="lg:text-4xl sm:text-2xl text-2xl font-bold pb-5 md:text-start text-center">
                      {item.title}
                    </h3>
                    <p className=" md:text-start text-center opacity-90">
                      {item.about}
                    </p>
                  </div>
                  <div className="flex justify-center items-center md:w-[50%] p-5">
                    <Image
                      src={item.image}
                      alt="Image"
                      className="m-w-[500px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:!px-10 lg:!px-[50px] bg-[#000000] py-20 mb-50">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[#FFFFFF] sm:text-[30px] lg:text-[50px] text-[30px] text-center  mx-auto font-[450]">
            About our Writers
          </h2>
          <p className="text-[#FFFFFF] sm:text-[20px] text-center pt-5 mx-auto ">
          We are fortunate to have writers from diverse educational backgrounds, including many from renowned universities, with a combined work experience spanning decades. You can connect with them through our LinkedIn page.

          </p>
        </div>
      </div>
    </div>
  );
}

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
