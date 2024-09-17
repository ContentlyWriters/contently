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
import Link from "next/link";
import { MdEmail } from "react-icons/md";

function Service() {
  return (
    <>
      <div className="px-4 sm:!px-10 lg:!px-[50px] bg-[#FFFFFF]  !w-full ">
        <div className="max-w-[1280px] mx-auto py-2">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl pt-10 font-normal text-center">
            Best Assignment Services
          </h1>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 sm:gap-10 lg:gap-16 my-8">
            {data.map((item, index) => (
              <div key={index}>
                {/* Hover effect applied to the entire card */}
                <Card className="p-5 min-h-[380px] hover:translate-y-3 duration-200 group cursor-pointer">
                  {/* Icon will change color when the whole card is hovered */}
                  <CardHeader className="text-5xl text-[#00052a] group-hover:text-[#5b6cf2] !justify-center">
                    <div className="flex justify-center">{item.logo}</div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-center text-3xl pb-2 text-[#00052a] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-md opacity-80 font-normal">
                      {item.about}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link href="mailto:info@contentlywriters.com">
        <div className="rounded-full fixed w-12 h-12 transition-colors duration-200 text-white hover:text-[#5646ea] bg-[#5646ea] hover:bg-white bottom-6 right-16 flex justify-center items-center shadow-xl">
          <MdEmail className="text-3xl" />
        </div>
      </Link>
    </>
  );
}

const data = [
  {
    logo: <FaShoppingCart className="max-auto" />,
    title: "Buy an assignment",
    about:
      "While we provide services for completing any assignment within the given timeframe, we also offer specialized assignments crafted through years of experience at a fair price. As a leading writing platform in the USA, we cover a wide range of topics across basic, intermediate, and advanced levels for almost all academic stages.",
  },
  {
    logo: <FaRegFileLines />,
    title: "Personal Statement",
    about:
      "Whether it’s for formality or specific requirements, a well-thought-out personal statement written by experienced writers can meet any need. We offer personal statement writing help, including writing a personal statement, assisting in its creation, and much more.",
  },
  {
    logo: <FaRegFilePdf />,
    title: "Buy a research paper",
    about:
      "Writing a research paper can be a daunting task, especially when you'd prefer to use your time more efficiently. We offer a variety of services to assist you, including writing research papers, providing help with research, and delivering high-quality papers crafted by experts. Our team includes research paper writers and provides the best research paper help in the USA.",
  },
  {
    logo: <FaRegNoteSticky />,
    title: "Subject Notes",
    about:
      "It’s an efficient and highly effective way to obtain high-quality study materials tailored to your needs. As a leading writing platform in the USA, our writers are experts in their respective fields and understand the requirements of students at various academic levels. Well-prepared notes could be invaluable for your next surprise exam! We offer services to write coursework notes, chapter notes, exam notes, and more.",
  },
  {
    logo: <FaListCheck />,
    title: "Specific Tasks/project",
    about:
      "Assignments or projects that deviate from standard guidelines often require extensive research and creative solutions. We offer a service for such projects through our platform, where you can connect directly with the person handling your project. You have the opportunity to provide input and ensure that the project progresses as intended. Additionally, we provide help writing essays to support you in managing complex tasks.",
  },
  {
    logo: <FaPenAlt />,
    title: "Coursework Writing",
    about:
      "Coursework is a crucial component of students' academic journeys, and our services are designed to make this process efficient and accessible. As the best coursework writing service, we strive to fulfill this promise with every piece of coursework written on our platform. Our coursework writing services range from routine tasks, such as chapter assignments, to more complex tasks, including experiments and practical writing.",
  },
  {
    logo: <FaFilePrescription />,
    title: "Dissertation",
    about:
      "Our dissertation services include conducting a thorough study on any given topic and crafting a well-structured dissertation with your input throughout the process. We offer comprehensive dissertation help services and dissertation writing help to meet your needs. If your specific requirements are not addressed through the form on the homepage, please visit our community page for further assistance.",
  },
  {
    logo: <ImPen />,
    title: "Essay Services",
    about:
      "Applying to new institutions can be an intimidating task. While preparing for this process can be overwhelming, it might also divert your focus from crafting effective college essays. We offer top essay services in the USA and the best write essay in the USA, helping to lighten your workload with well-constructed and compelling college essays.",
  },
  {
    logo: <FaBookOpen />,
    title: "Homework",
    about:
      "We handle homework for students of all grades and offer a variety of methods to complete your assignments exactly as you want. Our services, recognized for the best homework writing in the USA, cover everything from basic grade subjects to a range of academic levels.",
  },
];

export default Service;
