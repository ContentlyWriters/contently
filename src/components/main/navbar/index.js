"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/image/contently-logo.png";
import LargeNavbar from "./large-navbar";
import SmallNavbar from "./small-navbar";
import Link from "next/link";

const items = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Service", path: "/service",
    subItems: [
      { id: 21, name: "Do my assignment", path: "/service/do-my-assignment"},
      { id: 22, name: "Personal Statement", path: "/service/personal-statement"},
      { id: 23, name: "Buy a research paper", path: "/service/buy-a-research-paper"},
      { id: 24, name: "Subject Notes", path: "/service/subject-notes"},
      { id: 25, name: "Specific Tasks/project", path: "/service/specific-tasks-project"},
      { id: 26, name: "Coursework Writing", path: "/service/coursework-writing"},
      { id: 27, name: "Dissertation", path: "/service/dissertation"},
      { id: 28, name: "Essay Services", path: "/service/essay-service"},
      { id: 29, name: "Homework", path: "/service/homework"},
      { id: 30, name: "Assignment in UK", path: "/service/assignment-in-uk",
        subItems: [
          {id:3011, name: "Oxford" , path: "/service/assignment-in-uk/oxford", },
          {id:3022, name: "London" , path: "/service/assignment-in-uk/london", }
        ]
       },
      { id: 31, name: "Assignment in USA", path: "/service/assignment-in-usa",
        subItems: [
          {id:3111, name: "California" , path: "/service/assignment-in-usa/california", }
        ]
       },

      { id: 32, name: "Other Subjects & Services", path: "/service/other-subjects-and-services"},    
    ] 
  },


  { id: 3, name: "Subject", path: "subjects", 
    subItems: [
      { id: 32, name: "Management", path: "/subject/management",
        subItems: [
          { id: 211, name: "Business Management", path: "/subject/management#bisiness-management"},
          { id: 212, name: "Organizational Behavior", path: "/subject/management#organizational-behavior"},
          { id: 213, name: "Operations Management", path: "/subject/management#operation-management"},
          { id: 214, name: "Change Management", path: "/subject/management#change-management"},
          { id: 215, name: "Risk Management", path: "/subject/management#risk-management"}, 
          { id: 216, name: "Supply Chain Management", path: "/subject/management#supply-chain-management"},
          { id: 217, name: "Human Resource Management", path: "/subject/management#human-resource-management"},
          { id: 218, name: "Project Management", path: "/subject/management#project-management"},
          { id: 219, name: "Strategic Management", path: "/subject/management#strategic-management"}
        ]
      },
      { 
        id: 33, 
        name: "Accounting", 
        path: "/subject/accounting",
        subItems: [
          { id: 311, name: "Auditing", path: "/subject/accounting#auditing" },
          { id: 312, name: "Finance", path: "/subject/accounting#finance" },
          { id: 313, name: "Taxation Accounting", path: "/subject/accounting#taxation" },
          { id: 314, name: "MYOB", path: "/subject/accounting#myob" },
          { id: 315, name: "Corporate Accounting", path: "/subject/accounting#corporate-accounting" },
          { id: 316, name: "Management Accounting", path: "/subject/accounting#management-accounting" },
          { id: 317, name: "Cost Accounting", path: "/subject/accounting#cost-accounting" },
          { id: 318, name: "Information Systems", path: "/subject/accounting#information-systems" },
          { id: 319, name: "International Accounting", path: "/subject/accounting#international-accounting" },
          { id: 320, name: "Accounting Society", path: "/subject/accounting#accounting-society" }

        ]
      },
      { id: 34, name: "Engineering Studies", path: "/subject/engineering-studies",
        subItems: [
          { id: 411, name: "Mechanical Engineering", path: "/service/engineering-studies#mechanical-engineering" },
          { id: 412, name: "Civil Engineering", path: "/service/engineering-studies#civil-engineering" },
          { id: 413, name: "Software Engineering", path: "/service/engineering-studies#software-engineering" },
          { id: 414, name: "Chemical Engineering", path: "/service/engineering-studies#chemical-engineering" },
          { id: 415, name: "Biomedical Engineering", path: "/service/engineering-studies#biomedical-engineering" },
          { id: 416, name: "Electronic Engineering", path: "/service/engineering-studies#electronic-engineering" },
          { id: 417, name: "Aerospace Engineering", path: "/service/engineering-studies#aerospace-engineering" },
          { id: 418, name: "Computer Engineering", path: "/service/engineering-studies#computer-engineering" },
          { id: 419, name: "Electrical Engineering", path: "/service/engineering-studies#electrical-engineering" },
          { id: 420, name: "Engineering Mathematics", path: "/service/engineering-studies#engineering-mathematics" }
        ]
      },
      { id: 35, name: "Information Technology", path: "/subject/information-technology",
        subItems: [
          { id: 511, name: "Networking", path: "/service/information-technology#networking" },
          { id: 512, name: "Programming", path: "/service/information-technology#programming" },
          { id: 513, name: "R Programming", path: "/service/information-technology#r-programming" },
          { id: 514, name: "C Programming", path: "/service/information-technology#c-Programming" },
          { id: 515, name: "Linear Programming", path: "/service/information-technology#linear-Programming" },
          { id: 516, name: "Java", path: "/service/information-technology#java-Programming" },
          { id: 517, name: "JavaScript Assignment", path: "/service/information-technology#javascript-assignment" },
          { id: 518, name: "Python Assignment", path: "/service/information-technology#python-assignment" },
          { id: 519, name: "Ruby Assignment", path: "/service/information-technology#ruby-assignment" },
          { id: 520, name: "IT Security", path: "/service/information-technology#it-security" }
        ]
      },
      { id: 36, name: "Law", path: "/subject/law",
        subItems: [
          { id: 611, name: "Taxation Law", path: "/service/law#taxation-law" },
          { id: 612, name: "Commercial Law", path: "/service/law#commercial-law" },
          { id: 613, name: "Business Law", path: "/service/law#business-law" },
          { id: 614, name: "Criminal Law", path: "/service/law#crimianl-law" },
          { id: 615, name: "Employment Law", path: "/service/law#employment-law" },
          { id: 616, name: "Constitutional Law", path: "/service/law#constitutional-law" },
          { id: 617, name: "Civil Law", path: "/service/law#civil-law" },
          { id: 618, name: "Property Law", path: "/service/law#property-law" },
          { id: 619, name: "Corporate Law", path: "/service/law#corporate-law" },
          { id: 620, name: "Tort Law", path: "/service/law#tort-law" }
        ]
      },
      { id: 37, name: "Statistics", path: "/subject/statistics",
        subItems: [
          { id: 711, name: "STATA", path: "/service/statistics#stata" },
          { id: 712, name: "Econometrics", path: "/service/statistics#econometrics" },
          { id: 713, name: "R Studio", path: "/service/statistics#r-studio" },
          { id: 714, name: "Data Analysis", path: "/service/statistics#data-analysis" },
          { id: 715, name: "Data Mining", path: "/service/statistics#data-mining" },
          { id: 716, name: "Business Statistics", path: "/service/statistics#business-statistics" },
          { id: 717, name: "Financial Statistics", path: "/service/statistics#financial-statistics" },
          { id: 718, name: "Descriptive Statistics", path: "/service/statistics#descriptive-statistics" },
          { id: 719, name: "Management Accounting", path: "/service/statistics#management-accounting" }
        ]
      },
      { id: 38, name: "General Subjects", path: "/subject/general-subjects",
        subItems: [
          { id: 811, name: "Political Science", path: "/service/general-subjects#political-science" },
          { id: 812, name: "Social Science", path: "/service/general-subjects#social-science" },
          { id: 813, name: "Geography", path: "/service/general-subjects#geography" },
          { id: 814, name: "Psychology", path: "/service/general-subjects#psychology" },
          { id: 815, name: "Education Plan", path: "/service/general-subjects#eduction-plan" },
          { id: 816, name: "Humanities", path: "/service/general-subjects#humanities" },
          { id: 817, name: "Anthropology", path: "/service/general-subjects#anthropology" },
          { id: 818, name: "Philosophy", path: "/service/general-subjects#philosophy" },
          { id: 819, name: "Physics", path: "/service/general-subjects#physics" },
          { id: 820, name: "Probability", path: "/service/general-subjects#probability" }
        ]
      },
    ] 
  },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "About us", path: "/about" },
  { id: 6, name: "Contact", path: "/contact" },
];


function NavBar() {
  return (
    <div className="px-1 sm:!px-10 lg:!px-[50px] bg-[#FFFFFF] sm:px-4 !w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1280px] mx-auto  flex justify-between items-center py-1 sm:py-2">
        <Link href="/">
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt="Pangram Logo"
              className="h-[70px] w-[160px] sm:h-[80px] sm:w-[180px]"
              priority={true}
            />
          </div>
        </Link>
        <LargeNavbar items={items}  />
        <SmallNavbar items={items}  />
      </div>
    </div>
  );
}

export default NavBar;
