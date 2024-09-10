"use client";
import { list } from "postcss";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { FaChartBar } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

function Subject() {
  function scrollToSection(id) {
    console.log({ id });
    setTimeout(() => {
      const section = document.getElementById(id); // Replace 'sectionId' with the ID of the section you want to scroll to
      section.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }
  return (
    <>
      <div
        className="px-4 sm:!px-10 lg:!px-[50px] bg-black h-[300px]"
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2015/11/04/09/28/banner-1022119_1280.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "fit",
          alt:"subject",
        }}
      >
        <div className="max-w-[1280px] mx-auto py-16 text-[#b0ad9f] flex flex-col gap-4 justify-center items-center h-full ">
          <h1 className="text-center text-5xl font-semibold ">
            Welcome to our Subject Page
          </h1>
          <h2 className="text-xl text-center">
            Explore our wide range of subjects and services
          </h2>
        </div>
      </div>
      <div className="px-4 sm:!px-10 lg:!px-[50px]">
        <div className="max-w-[1280px] mx-auto py-16 ">
          <div className="flex gap-4 justify-center flex-wrap ">
            {listOFSubjects.map((subject) => (
              <button
                onClick={() => scrollToSection(subject.tag)}
                key={subject.id}
                className="hover:text-[#5b6cf2] "
              >
                {subject.title}
              </button>
            ))}
          </div>
          <div className="grid gap-10 my-10 md:px-24 sm:px-16 px-2">
            {data.map((item, index) => (
              <div key={index} className="grid gap-6" id={item.tag}>
                <h3 className="text-4xl font-semibold flex gap-1">
                  {item.logo} {item.title}
                </h3>
                <p className="text-[#555]">{item.about}</p>
                {item.points.length != 0 && (
                  <h4 className="text-3=2xl font-semibold">Services Offered</h4>
                )}
                {item.points.length != 0 && (
                  <ul className="list-none p-0 grid gap-3">
                    {item.points.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center relative text-[#555]"
                      >
                        <div className="bg-[#42b84a] w-5 h-5 rounded-full flex justify-center items-center mr-3 ">
                          <FaCheck className="text-white text-sm" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {item.manner.length != 0 && (
                  <h4 className="text-3=2xl font-semibold">
                    We offer services in the following manner
                  </h4>
                )}
                {item.manner.length != 0 && (
                  <ul className="list-none p-0 grid gap-3">
                    {item.manner.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center relative text-[#555]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="list-none p-0 grid gap-3">
                  {item?.aboutPoints?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center relative text-[#555]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-xl font-semibold pb-3">
                The services we provide for any such subjects include:
              </p>
              <div className="text-[#555] text-md grid gap-3">
                <p>
                Assisting with assignments or homework in any of the subjects listed

                </p>
                <p>
                Completing assignments in any of the subjects mentioned

                </p>
                <p>
                Providing pre-made assignments for a reasonable price or special offers

                </p>
              </div>
            </div>
            <div className="grid gap-4 mt-2">
              <div className="flex items-center">
                <div className="rounded-full bg-black h-3 w-3 m-[1px] " ></div>
                <div className="rounded-full bg-black h-3 w-3 m-[1px] " ></div>
                <div className="rounded-full bg-black h-3 w-3 m-[1px] " ></div>
                <h2 className="text-4xl font-semibold">
                  Other Subjects and Services
                </h2>
              </div>

              <div className="text-[#555] gap-6 grid">
                <p>
                If you&#39;re seeking a subject not listed on our page or have an assignment that falls outside mainstream topics, we can still assist you. 
                </p>
                <p>
                Reach out to us via email or through our social media pages. If your assignment aligns with any of our writers&#39; expertise, we&#39;ll be happy to take it on.

                </p>
                <p>
                  We deliver on our promise as all the assignments we do will be
                  devised with merit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="mailto:info@contentlywriters.com">
        <div className="rounded-full fixed w-12 h-12 transition-colors duration-200 text-white hover:text-[#5646ea] bg-[#5646ea] hover:bg-white bottom-6 right-16  flex justify-center items-center shadow-xl">
          <MdEmail className="text-3xl " />
        </div>
      </Link>
    </>
  );
}

export default Subject;

const data = [
  {
    title: "Management",
    tag: "#management",
    logo: <FaChartLine />,
    about:
      "Management involves the administration of various organizations, whether in the form of businesses, nonprofit entities, or government bodies, through business administration, nonprofit management, or public administration, respectively. It encompasses the process of effectively managing resources across businesses, governments, and other organizations.",

    service: "Services Offered",
    points: [
      "Management assignment help",
      "Doing a Management assignment",
      "Offering pre-made Management assignments for sale",
    ],

    mannerHeading: "We offer services in the following manner",
    manner: [
      "Business Management",
      "Organizational Behavior",
      "Operations Management",
      "Change Management",
      "Risk Management",
      "Supply Chain Management",
      "Human Resource Management",
      "Project Management",
      "Strategic Management",
    ],
  },
  {
    tag: "#accounting",
    title: "Accounting",
    logo: <FaCalculator />,
    about: `Accounting, or accountancy, involves recording and processing financial information related to economic entities like businesses and corporations. It assesses the outcomes of an organization's economic activities and communicates this information to various stakeholders, such as investors, creditors, management, and regulators. Those who practice accounting are referred to as accountants. The terms "accounting" and "financial reporting" are frequently used interchangeably.`,
    
    service: "Services Offered",
    points: [
      "Accounting assignment help",
      "Doing an Accounting assignment",
      "Offering pre-made Accounting assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Auditing",
      "Finance",
      "Taxation Accounting",
      "MYOB",
      "Corporate Accounting",
      "Management Accounting",
      "Cost Accounting",
      "Accounting Information Systems",
      "International Accounting",
      "Accounting Society",
    ],
  },
  {
    tag: "#engineering",
    title: "Engineering Studies",
    logo: <MdEngineering />,
    about:
      "Engineering studies is an interdisciplinary field within the social sciences and humanities focused on examining engineers and their activities. It is often considered part of science and technology studies (STS) and intersects with research on engineering education. This field explores various aspects, such as the history and sociology of the engineering profession, its institutionalization and organization, the demographics and social structure of engineers, their education and career paths, among other topics. A notable subfield is the study of women in engineering. Additionally, engineering studies delve into the practices, knowledge, and societal roles of engineering activities.",
    service: "Services Offered",
    points: [
      "Engineering assignment help",
      "Doing an Engineering assignment",
      "Offering pre-made Engineering assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Software Engineering",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Electronic Engineering",
      "Aerospace Engineering",
      "Computer Engineering",
      "Electrical Engineering",
      "Engineering Mathematics",
    ],
  },
  {
    tag: "#it",
    title: "Information Technology",
    logo: <FaLaptopCode />,
    about:
      "Information technology (IT) involves a range of interconnected disciplines related to computer systems, software, programming languages, and the management and storage of data and information. IT is a component of information and communications technology (ICT). Typically, an IT system encompasses an information system, a communications system, or more precisely, a computer system—comprising all hardware, software, and peripheral devices—used by a specific group of IT users. An IT project generally refers to the process of designing and deploying an IT system.",
    service: "Services Offered",
    points: [
      "IT assignment help",
      "Doing an IT assignment",
      "Offering pre-made IT assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Networking",
      "Programming",
      "R Programming",
      "C Programming",
      "Linear Programming",
      "Java",
      "JavaScript Assignment",
      "Python Assignment",
      "Ruby Assignment",
      "IT Security",
    ],
  },
  {
    tag: "#law",
    title: "Law",
    logo: <VscLaw />,
    about:
      "Legal education involves training individuals in the fundamentals, methodologies, and theoretical aspects of law. This education can serve various purposes, such as preparing individuals for legal practice in a specific jurisdiction, expanding knowledge for professionals in fields like politics or business, offering advanced or specialized training for existing lawyers, or keeping legal practitioners informed about recent legal developments.",
    service: "Services Offered",
    points: [
      "Law assignment help",
      "Doing a law assignment",
      "Offering pre-made law assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Taxation Law",
      "Commercial Law",
      "Business Law",
      "Criminal Law",
      "Employment Law",
      "Constitutional Law",
      "Civil Law",
      "Property Law",
      "Corporate Law",
      "Tort Law",
    ],
  },
  {
    tag: "#statistics",
    title: "Statistics",
    logo: <FaChartBar />,
    about: `Statistics is the field focused on the collection, organization, analysis, interpretation, and presentation of data. Originating from the German word "Statistik," which means "description of a state or country," the discipline involves starting with a statistical population or model to investigate a scientific, industrial, or social issue. Populations can encompass various entities, such as "all individuals within a country" or "every atom in a crystal." Statistics covers all facets of data management, including the design and planning of surveys and experiments for effective data collection.`,
    service: "Services Offered",
    points: [
      "Statistics assignment help",
      "Doing a Statistics assignment",
      "Offering pre-made Statistics assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Statistics",
      "STATA",
      "Econometrics",
      "R Studio",
      "Data Analysis",
      "Data Mining",
      "Business Statistics",
      "Financial Statistics",
      "Descriptive Statistics",
      "Statistics Management Accounting",
    ],
  },
  {
    tag: "#general",
    title: "General Subjects",
    logo: <FaBook />,
    about:
      "We provide support across a range of academic levels, from foundational school topics to advanced dissertations of outstanding quality. Below are some general subjects that could be beneficial:",
    aboutPoints: [
      "Political Science",
      "Social Science",
      "Geography",
      "Psychology",
      "Education Plan",
      "Humanities",
      "Anthropology",
      "Philosophy",
      "Physics",
      "Probability",
    ],
    service: "",
    points: [],
    mannerHeading: "",
    manner: [],
  },
];

const listOFSubjects = [
  {
    id: 1,
    title: "Management",
    tag: "#management",
  },
  {
    id: 2,
    title: "Accounting",
    tag: "#accounting",
  },
  {
    id: 3,
    title: "Engineering",
    tag: "#engineering",
  },
  {
    id: 4,
    title: "Information Technology",
    tag: "#it",
  },
  {
    id: 5,
    title: "Law",
    tag: "#law",
  },
  {
    id: 6,
    title: "Statistics",
    tag: "#statistics",
  },
  {
    id: 7,
    title: "General Subjects",
    tag: "#general",
  },
];
