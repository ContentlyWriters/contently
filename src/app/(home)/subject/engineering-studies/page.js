"use client"
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const EngineeringStudiesPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#2c3e50] py-8">
        <h1 className="text-white sm:text-[40px] lg:text-[50px] text-[30px] text-center pt-20 mx-auto font-semibold">
          Engineering Studies Assignment Help
        </h1>
        <p className="text-white text-[25px] text-center pt-2 mb-8 mx-auto">
          Expert assistance for engineering students worldwide.
        </p>
        <div className="h-[7px] w-[150px] bg-[#ffcc00] mx-auto"></div>
      </div>

      {/* Introduction Section */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto py-16">
          <p className="text-[#333] text-xl mb-6">
            Engineering studies encompass a wide range of fields including civil, mechanical, electrical, and software engineering. While the scope is vast, many students face challenges in understanding core concepts and completing their assignments. Our experts are dedicated to providing comprehensive support to help you excel in your engineering studies.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto py-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Engineering Services</h2>

          {/* Civil Engineering */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Civil Engineering</h3>
            <p className="text-[#555]">
              Get assistance with civil engineering projects including structural analysis, fluid mechanics, and materials engineering.
            </p>
            {/* Example Bar Chart */}
            <div className="mt-6">
              <Bar
                data={{
                  labels: ['Concrete', 'Steel', 'Wood'],
                  datasets: [{
                    label: 'Materials Used',
                    data: [50, 30, 20],
                    backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
                  }],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
                className="h-60"
              />
            </div>
          </div>

          {/* Mechanical Engineering */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Mechanical Engineering</h3>
            <p className="text-[#555]">
              Understand thermodynamics, fluid dynamics, and mechanical design with our expert guidance.
            </p>
            {/* Example Pie Chart */}
            <div className="mt-6">
              <Pie
                data={{
                  labels: ['Thermodynamics', 'Fluid Mechanics', 'Mechanics of Materials'],
                  datasets: [{
                    data: [40, 35, 25],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  }],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
                className="h-60"
              />
            </div>
          </div>

          {/* Electrical Engineering */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Electrical Engineering</h3>
            <p className="text-[#555]">
              Tackle circuit analysis, digital systems, and electromagnetic fields with our tailored assistance.
            </p>
            {/* Example Line Chart */}
            <div className="mt-6">
              <Line
                data={{
                  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                  datasets: [{
                    label: 'Project Progress',
                    data: [20, 40, 60, 80],
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
              Facing difficulties in your engineering studies? Contact our experts and receive top-notch assignment help today!
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

export default EngineeringStudiesPage;
