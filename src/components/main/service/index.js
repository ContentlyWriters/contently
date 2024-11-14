import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { ImPen } from "react-icons/im";
import { FaFilePrescription } from "react-icons/fa6";
import { FaPenAlt } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaGlobe, FaGraduationCap } from 'react-icons/fa';
import Link from "next/link";
import { MdEmail } from "react-icons/md";

function Service() {
  return (
    <>
      <div className="px-4 sm:!px-10 lg:!px-[50px] bg-gradient-to-b from-[#f8f9fa] to-[#ffffff] w-full">
        <div className="max-w-[1280px] mx-auto py-2 ">
          <div className="bg-[#020035] w-full py-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl pt-10 font-bold text-center text-[#ffffff]">
              Best Assignment Services
            </h1>
            <p className="text-center text-md sm:text-lg text-[#ffffff] mt-4 mb-10 max-w-[800px] mx-auto">
              Explore our comprehensive services designed to help students succeed with their academic work, offering top-quality assignments tailored to your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-12 lg:gap-16 my-8">
            {data.map((item, index) => (
              <div key={index}>
                <Card className="relative p-6 min-h-[400px] transition-transform duration-300 transform hover:-translate-y-2 group cursor-pointer bg-white shadow-lg hover:shadow-2xl rounded-lg border border-[#e3e3e3]">
                  <CardHeader className="text-5xl text-[#00052a] group-hover:text-[#5b6cf2] !justify-center">
                    <div className="flex justify-center">{item.logo}</div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-center text-3xl pb-4 text-[#00052a] font-semibold transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-center text-md text-[#555555] opacity-80 font-light transition-colors duration-200">
                      {item.about}
                    </p>
                  </CardContent>

                  {/* Enhanced animated button */}
                  <div className="absolute bottom-4 right-4">
                    <Link href={item.href} passHref>
                      <button className="enhanced-button">
                        Visit Page
                      </button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating email button */}
      <Link href="mailto:info@contentlywriters.com">
        <div className="rounded-full fixed w-12 h-12 transition-colors duration-200 text-white hover:text-[#5b6cf2] bg-[#5b6cf2] hover:bg-white bottom-6 right-8  flex justify-center items-center shadow-xl">
          <MdEmail className="text-3xl " />
        </div>
      </Link>
    </>
  );
}
const data = [
  {
    logo: <FaShoppingCart className="max-auto" />,
    title: "Do my assignment",
    about: "While we provide services for completing any assignment within the given timeframe, we also offer specialized assignments crafted through years of experience at a fair price. As a leading writing platform in the USA, we cover a wide range of topics across basic, intermediate, and advanced levels for almost all academic stages.",
    href: "/service/do-my-assignment", // Define the link for this card
  },
  {
    logo: <FaRegFileLines />,
    title: "Personal Statement",
    about: "Whether it’s for formality or specific requirements, a well-thought-out personal statement written by experienced writers can meet any need. We offer personal statement writing help, including writing a personal statement, assisting in its creation, and much more.",
    href: "/service/personal-statement", // Define the link for this card
  },
  {
    logo: <FaRegFilePdf />,
    title: "Buy a research paper",
    about: "Writing a research paper can be a daunting task, especially when you'd prefer to use your time more efficiently. We offer a variety of services to assist you, including writing research papers, providing help with research, and delivering high-quality papers crafted by experts. Our team includes research paper writers and provides the best research paper help in the USA.",
    href: "/service/buy-a-research-paper", // Define the link for this card
  },
 
  {
    logo: <FaPenAlt />,
    title: "Coursework Writing",
    about: "Coursework is a crucial component of students' academic journeys, and our services are designed to make this process efficient and accessible. As the best coursework writing service, we strive to fulfill this promise with every piece of coursework written on our platform. Our coursework writing services range from routine tasks, such as chapter assignments, to more complex tasks, including experiments and practical writing.",
    href: "/service/coursework-writing", // Define the link for this card
  },
  {
    logo: <FaFilePrescription />,
    title: "Dissertation",
    about: "Our dissertation services include conducting a thorough study on any given topic and crafting a well-structured dissertation with your input throughout the process. We offer comprehensive dissertation help services and dissertation writing help to meet your needs. If your specific requirements are not addressed through the form on the homepage, please visit our community page for further assistance.",
    href: "/service/dissertation", // Define the link for this card
  },
  {
    logo: <ImPen />,
    title: "Essay Services",
    about: "Applying to new institutions can be an intimidating task. While preparing for this process can be overwhelming, it might also divert your focus from crafting effective college essays. We offer top essay services in the USA and the best write essay in the USA, helping to lighten your workload with well-constructed and compelling college essays.",
    href: "/service/essay-service", // Define the link for this card
  },
  {
    logo: <FaBookOpen />,
    title: "Homework",
    about: "We handle homework for students of all grades and offer a variety of methods to complete your assignments exactly as you want. Our services, recognized for the best homework writing in the USA, cover everything from basic grade subjects to a range of academic levels.",
    href: "/service/homework", // Define the link for this card
  },
  {
    logo: <FaGlobe />,
    title: "Country",
    about: "Our vast resources offer in-depth analyses of nations all around the world, encompassing everything from economic environments to cultural quirks. Our content will help you navigate the many facets of any nation, whether you're a scholar or a student in need of homework assistance.",
    href: "/country", // Define the link for this card
  },
  {
    logo: <FaGraduationCap />,
    title: "Other subject and services",
    about: "We provide professional assistance on a wide range of topics in addition to our specialist country guides. We offer homework help, essay writing, and project planning for all academic levels, from the humanities to mathematics. We are dedicated to providing students with specialized solutions that meet their academic requirements in order to help them achieve.",
    href: "/service/other-subjects-and-services", // Define the link for this card
  },
];

export default Service;