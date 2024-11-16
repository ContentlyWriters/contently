"use client"
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const LawPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#2c3e50] py-8">
        <h1 className="text-white sm:text-[40px] lg:text-[50px] text-[30px] text-center pt-20 mx-auto font-semibold">
          Law Assignment Help
        </h1>
        <p className="text-white text-[25px] text-center pt-2 mb-8 mx-auto">
          Expert assistance for law students worldwide.
        </p>
        <div className="h-[7px] w-[150px] bg-[#e74c3c] mx-auto"></div>
      </div>

      {/* Introduction Section */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto py-16">
          <p className="text-[#333] text-xl mb-6">
            The study of law is critical for maintaining justice and order in society. Law students often face complex legal theories and frameworks, making professional guidance essential for academic success. Our law assignment help services are designed to assist you in navigating these challenges effectively.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto py-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Law Services</h2>

          {/* Criminal Law */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Criminal Law</h3>
            <p className="text-[#555]">
              Get expert help in understanding criminal justice, legal terminology, and case studies tailored to your needs.
            </p>
            {/* Example Bar Chart */}
            <div className="mt-6">
              <Bar
                data={{
                  labels: ['Murder', 'Theft', 'Assault', 'Fraud'],
                  datasets: [{
                    label: 'Types of Crimes',
                    data: [35, 25, 20, 20],
                    backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
                  }],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
                className="h-60"
              />
            </div>
          </div>

          {/* Civil Law */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Civil Law</h3>
            <p className="text-[#555]">
              Understand contract law, torts, and property rights with our specialized help and comprehensive resources.
            </p>
            {/* Example Pie Chart */}
            <div className="mt-6">
              <Pie
                data={{
                  labels: ['Contracts', 'Torts', 'Property', 'Family'],
                  datasets: [{
                    data: [40, 30, 20, 10],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                  }],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
                className="h-60"
              />
            </div>
          </div>

          {/* Constitutional Law */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Constitutional Law</h3>
            <p className="text-[#555]">
              Explore the principles of constitutional governance, rights, and duties with our expert guidance.
            </p>
            {/* Example Line Chart */}
            <div className="mt-6">
              <Line
                data={{
                  labels: ['1791', '1865', '1964', '2020'],
                  datasets: [{
                    label: 'Major Amendments Over Time',
                    data: [1, 13, 24, 27],
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
              Are you facing challenges with your law assignments? Contact our experts for reliable support and achieve your academic goals!
            </p>
            <Link href="mailto:info@contentlywriters.com">
              <div className="rounded-full w-12 h-12 transition-colors duration-200 text-white hover:text-[#e74c3c] bg-[#e74c3c] hover:bg-white mx-auto mt-8 flex justify-center items-center shadow-xl">
                <MdEmail className="text-3xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawPage;
