"use client";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

// Section data array with headings as IDs
const sections = [
  { id: "accounting", title: "Accounting", description: "..." },
  { id: "importance", title: "Importance of Accounting", description: "..." },
  { id: "auditing", title: "Auditing", description: "..." },
  { id: "finance", title: "Finance", description: "..." },
  { id: "taxation", title: "Taxation Accounting", description: "..." },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const AccountingPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#004080] py-8">
        <h1 className="text-white sm:text-[40px] lg:text-[50px] text-[30px] text-center pt-20 mx-auto font-semibold">
          Accounting Assignment Help
        </h1>
        <p className="text-white text-[25px] text-center pt-2 mb-8 mx-auto">
          Get expert assistance in accounting assignments globally.
        </p>
        <div className="h-[7px] w-[150px] bg-[#ffcc00] mx-auto"></div>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center space-x-4 py-4">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="text-[#004080] hover:underline"
          >
            {section.title}
          </button>
        ))}
      </nav>

      {/* Dynamically render sections */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="max-w-[1280px] mx-auto py-8">
            <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
            <p className="text-[#555] whitespace-pre-line">{section.description}</p>

            {/* Conditionally render charts based on the section ID */}
            {section.id === "auditing" && (
              <div className="mt-6">
                <Pie
                  data={{
                    labels: ["Assets", "Liabilities", "Equity"],
                    datasets: [
                      {
                        data: [50000, 30000, 20000],
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                      },
                    ],
                  }}
                  options={{ responsive: true, maintainAspectRatio: false }}
                  className="h-40 w-40"
                />
              </div>
            )}

            {section.id === "finance" && (
              <div className="mt-6">
                <Bar
                  data={{
                    labels: ["Fixed Costs", "Variable Costs", "Overheads"],
                    datasets: [
                      {
                        label: "Cost Breakdown",
                        data: [20000, 15000, 5000],
                        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
                      },
                    ],
                  }}
                  options={{ responsive: true, maintainAspectRatio: false }}
                  className="h-40 w-40"
                />
              </div>
            )}

            {section.id === "taxation" && (
              <div className="mt-6">
                <Line
                  data={{
                    labels: ["Q1", "Q2", "Q3", "Q4"],
                    datasets: [
                      {
                        label: "Tax Revenue",
                        data: [30000, 40000, 35000, 45000],
                        fill: false,
                        borderColor: "#36A2EB",
                      },
                    ],
                  }}
                  options={{ responsive: true, maintainAspectRatio: false }}
                  className="h-40 w-40"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Conclusion Section */}
      <div className="text-center py-10">
        <p className="text-lg font-semibold">
          Need professional assistance with your accounting assignments? Get in touch with our experts and ensure academic success!
        </p>
        <Link href="mailto:info@contentlywriters.com">
          <div className="rounded-full w-12 h-12 transition-colors duration-200 text-white hover:text-[#ffcc00] bg-[#ffcc00] hover:bg-white mx-auto mt-8 flex justify-center items-center shadow-xl">
            <MdEmail className="text-3xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AccountingPage;
