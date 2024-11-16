"use client"
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const StatisticsPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#2c3e50] py-8">
        <h1 className="text-white sm:text-[40px] lg:text-[50px] text-[30px] text-center pt-20 mx-auto font-semibold">
          Statistics Assignment Help
        </h1>
        <p className="text-white text-[25px] text-center pt-2 mb-8 mx-auto">
          Comprehensive assistance for statistics students worldwide.
        </p>
        <div className="h-[7px] w-[150px] bg-[#e74c3c] mx-auto"></div>
      </div>

      {/* Introduction Section */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto py-16">
          <p className="text-[#333] text-xl mb-6">
            The field of statistics is essential for data analysis and interpretation. With a complex array of concepts such as probability, regression, and statistical testing, students often seek professional help to excel in their assignments. Our statistics assignment help services are designed to guide you through these challenges with ease.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto py-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Statistics Services</h2>

          {/* Descriptive Statistics */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Descriptive Statistics</h3>
            <p className="text-[#555]">
              Understand how to summarize and describe the important features of a data set effectively.
            </p>
            {/* Example Bar Chart */}
            <div className="mt-6">
              <Bar
                data={{
                  labels: ['Mean', 'Median', 'Mode'],
                  datasets: [{
                    label: 'Central Tendency Measures',
                    data: [20, 15, 10],
                    backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
                  }],
                }}
                options={{ responsive: true, maintainAspectRatio: true }}
                className="h-30"
              />
            </div>
          </div>

          {/* Inferential Statistics */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Inferential Statistics</h3>
            <p className="text-[#555]">
              Gain insights into how to make predictions or inferences about a population based on sample data.
            </p>
            {/* Animated Pie Chart */}
            <div className="mt-6">
              <Pie
                data={{
                  labels: ['Confidence Intervals', 'Hypothesis Testing', 'Regression Analysis'],
                  datasets: [{
                    data: [40, 35, 25],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  }],
                }}
                options={{
                  responsive: true,
                  animation: {
                    animateScale: true,
                    animateRotate: true,
                  },
                }}
                className="h-30" // Adjusted size
              />
            </div>
          </div>

          {/* Advanced Statistics */}
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Advanced Statistics</h3>
            <p className="text-[#555]">
              Dive into more complex statistical techniques, including multivariate analysis and experimental design.
            </p>
            {/* Example Line Chart */}
            <div className="mt-6">
              <Line
                data={{
                  labels: ['2018', '2019', '2020', '2021', '2022'],
                  datasets: [{
                    label: 'Statistical Analysis Growth',
                    data: [10, 20, 30, 40, 50],
                    fill: false,
                    borderColor: '#36A2EB',
                  }],
                }}
                options={{ responsive: true, maintainAspectRatio: true }}
                className="h-30 w-30" // Adjusted size
              />
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="text-center py-10">
            <p className="text-lg font-semibold">
              Are you struggling with your statistics assignments? Reach out to our experts for reliable support and elevate your academic performance!
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

export default StatisticsPage;
