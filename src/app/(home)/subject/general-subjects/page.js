"use client"
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GeneralSubjectPage() {
  const data = {
    labels: ['Theory', 'Practical', 'Assignments'],
    datasets: [
      {
        label: 'Subject Distribution',
        data: [40, 30, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">General Subject Assistance</h1>
      <p className="text-lg mb-6">
        Are you struggling with your general subject assignments? Our experts are here to help you with personalized support to enhance your understanding and improve your grades.
      </p>

      <div className="w-64 h-64">
        <Pie data={data} />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Us?</h2>
      <p className="mb-4">We offer comprehensive support in various subjects. Here are some reasons to trust our services:</p>
      <ul className="list-disc ml-5 mb-6">
        <li>Expert Writers: Our team consists of experienced professionals in various fields.</li>
        <li>24/7 Support: We are always available to assist you with any queries.</li>
        <li>Original Content: We provide 100% plagiarism-free work.</li>
        <li>Timely Delivery: Your assignments will be delivered on or before the deadline.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Get Started Today!</h2>
      <p>If you are ready to improve your academic performance, reach out to us!</p>
      <Link href="/contact" className="mt-4 flex items-center text-blue-600">
        <MdEmail className="mr-2" /> Contact Us
      </Link>
    </div>
  );
}
