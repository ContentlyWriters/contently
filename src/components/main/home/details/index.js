import Image from "next/image";
import React from "react";
import image1 from "@/assets/image/5484597.svg";
import image2 from "@/assets/image/5150721.svg";
import image3 from "@/assets/image/5150721.svg";
import image4 from "@/assets/image/19197293.svg";
import image5 from "@/assets/image/5138237.svg";
import image6 from "@/assets/image/5024147.svg";
import image7 from "@/assets/image/4931505.svg";


export default function Details() {
  return (
    <div className="px-4 sm:!px-10 lg:!px-[50px] ">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid sm:!gap-1 gap-10" >
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col  
              justify-center items-center 
       
              ${Number(index) % 2== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } `}
            >
              <div className={`flex justify-center flex-col md:w-[50%] `}>
                <h3 className="lg:text-5xl sm:text-3xl text-3xl font-bold pb-5 md:text-start text-left sm:px-0 px-2 sm:text-center">{item.title}</h3>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-small px-2 leading-tight sm:leading-normal text-left sm:px-0 sm:text-left">
  {item.description}
</p>

              </div>
              <div className="flex justify-center items-center md:w-[50%] p-5">
                <Image src={item.image} alt="Topic" className="m-w-[500px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    title: "EXPERTISE",
    description:
      "Assignments are completed meticulously by experts in the field with years of experience.",
    image: image6,
  },
  {
    id: 2,
    title: "Covered Topics",
    description:
      "We offer services across a wide range of subjects and topics, from standard school subjects to specialized research papers.",
    image: image1,
  },
  {
    id: 3,
    title: "SIGN IN / LOG IN ",
    description:
      "You can track your assignments through the profile page, where we provide SafeAssign to help maintain academic integrity and originality.",
    image: image3,
  },
  {
    id: 4,
    title: "IN YOUR BUDGET!",
    description:
      "We offer services in a variety of formats to fit any budget, making it easy for you to pay for assignments that meet your specific needs.",
    image: image4,
  },
  {
    id: 4,
    title: "COMMUNITY",
    description:
      "Our team is responsible and responsive, ready to assist whenever needed.",
    image: image5,
  },
  {
    id: 4,
    title: "ALWAYS ON TIME !",
    description:
      "Your assignments will always be completed on time. Check out our policies for more details.",
    image: image7,
  },
];
