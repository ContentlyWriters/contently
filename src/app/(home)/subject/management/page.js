"use client"
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import Link from 'next/link';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Example data for charts
const dataPie = {
  labels: ['HR', 'Marketing', 'Finance', 'Strategic Management', 'Organizational Behavior'],
  datasets: [
    {
      label: 'Management Assignment Help Distribution',
      data: [20, 15, 25, 10, 30], // Example data for categories
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    },
  ],
};

const dataBar = {
  labels: ['Fastest Delivery', 'Original Content', 'Customer Support', 'Data Security'],
  datasets: [
    {
      label: 'Customer Satisfaction',
      data: [90, 95, 85, 88], // Example satisfaction scores
      backgroundColor: '#4BC0C0',
    },
  ],
};

export default function ManagementPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Management Assignment Help</h1>
      </header>

      {/* Intro Section */}
      <section className="mb-12 text-lg">
        <p>
          Students nowadays choose management as their major due to its wide scope. Management studies require focus and understanding, but assignments can be challenging. 
          That’s why we offer expert help to support students globally. Get help from our professional writers and ensure academic success.
        </p>
      </section>

      {/* Graph 1 - Pie Chart */}
      <div className="w-full md:w-1/2 mx-auto mb-12">
        <h3 className="text-xl font-semibold text-center mb-4">Assignment Help Categories</h3>
        <div className="bg-white shadow-md rounded-lg p-6">
          <Pie data={dataPie} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Why Trust Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Why You Should Trust Our Management Assignment Writing Services?</h2>
        <p>
          Choosing someone for writing management assignments comes with a lot of questions. That is why it is not one or two, but we provide you with tons of reasons to choose our best management assignment help...
        </p>
      </section>

      {/* Graph 2 - Bar Chart */}
      <div className="w-full md:w-1/2 mx-auto mb-12">
        <h3 className="text-xl font-semibold text-center mb-4">Customer Satisfaction</h3>
        <div className="bg-white shadow-md rounded-lg p-6">
          <Bar data={dataBar} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Other Content Sections */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Get Help with Different Areas at Our Management Assignment Writing Help</h3>
        <p className="mb-4">
          Management is one of the vast courses that students opt for as their major. There are also huge areas that students have to study, and you will be surprised to know that we provide online management assignment help services for all that.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Human Resource Management Help</strong>: HR deals with hiring, training, and monitoring employees...</li>
          <li><strong>Marketing Assignment Help</strong>: Marketing helps firms promote their services and products...</li>
          <li><strong>Finance Assignment Help</strong>: Finance deals with managing company finances and requires difficult calculations...</li>
          <li><strong>Strategic Management Help</strong>: Strategic management is key to planning and meeting goals...</li>
          <li><strong>Organizational Behavior Help</strong>: Study how people interact with the firm and affect performance...</li>
        </ul>
      </section>
    </div>
  );
}
