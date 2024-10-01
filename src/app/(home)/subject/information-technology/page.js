"use client"
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const InformationTechnologyPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#34495e] py-8">
        <h1 className="text-white sm:text-[40px] lg:text-[50px] text-[30px] text-center pt-20 mx-auto font-semibold">
          Information Technology Assignment Help
        </h1>
        <p className="text-white text-[25px] text-center pt-2 mb-8 mx-auto">
          Expert support for IT students around the globe.
        </p>
        <div className="h-[7px] w-[150px] bg-[#ffcc00] mx-auto"></div>
      </div>

      {/* Introduction Section */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto py-16">
          <p className="text-[#333] text-xl mb-6">
            Information Technology (IT) is a dynamic field that plays a vital role in today&#39;s digital age. From software development to network security, the scope of IT is extensive. Students pursuing IT degrees often encounter challenges with assignments, making expert assistance essential for their success.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto py-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Our IT Services</h2>

          {/* Software Development */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Software Development</h3>
            <p className="text-[#555]">
              Get help with software engineering projects, algorithms, and coding assignments tailored to your needs.
            </p>
            {/* Example Bar Chart */}
            <div className="mt-6">
              <Bar
                data={{
                  labels: ['Python', 'Java', 'JavaScript', 'C#'],
                  datasets: [{
                    label: 'Languages Used',
                    data: [40, 30, 20, 10],
                    backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
                  }],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
                className="h-60"
              />
            </div>
          </div>

          {/* Network Security */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Network Security</h3>
            <p className="text-[#555]">
              Learn about network protocols, security measures, and ethical hacking with our specialized help.
            </p>
            {/* Example Pie Chart */}
            <div className="mt-6">
              <Pie
                data={{
                  labels: ['Firewalls', 'Intrusion Detection', 'Encryption'],
                  datasets: [{
                    data: [50, 30, 20],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  }],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
                className="h-60"
              />
            </div>
          </div>

          {/* Data Analysis */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Data Analysis</h3>
            <p className="text-[#555]">
              Master data handling, statistical analysis, and visualization techniques to excel in your assignments.
            </p>
            {/* Example Line Chart */}
            <div className="mt-6">
              <Line
                data={{
                  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                  datasets: [{
                    label: 'Data Trends',
                    data: [30, 60, 40, 80],
                    fill: false,
                    borderColor: '#36A2EB',
                  }],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
                className="h-60"
              />
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="text-center py-10">
            <p className="text-lg font-semibold">
              Are you struggling with your IT assignments? Contact our experts for reliable support and achieve your academic goals!
            </p>
            <Link href="mailto:info@contentlywriters.com">
              <div className="rounded-full w-12 h-12 transition-colors duration-200 text-white hover:text-[#ffcc00] bg-[#ffcc00] hover:bg-white mx-auto mt-8 flex justify-center items-center shadow-xl">
                <MdEmail className="text-3xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationTechnologyPage;
