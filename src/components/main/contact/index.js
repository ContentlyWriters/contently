"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export default function ContactSection() {
  const [hovering, setHovering] = useState(false);

 
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

 const data = await res.json();
if (data.success) {
  setStatus("✅ Message sent!");
  setForm({ name: "", email: "", company: "", message: "" });
} else {
  setStatus("❌ Failed to send. Please try again.");
}

  };

  return (
    <section className="relative bg-white  ">
 <div className="relative bg-[#020035] h-[60vh] overflow-hidden">
  {/* Background Image with low opacity */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{ backgroundImage: "url('/contact-bg.png')" }}
  ></div>

  {/* Optional: dark overlay for better contrast */}
  <div className="absolute inset-0 bg-[#020035]/70"></div>

  {/* Text Section */}
  <div className="max-w-5xl mx-auto px-6 md:px-12 text-left text-white pt-12 relative z-10">
    <h1 className="text-3xl sm:text-4xl mb-20 lg:text-5xl font-bold leading-snug mt-[8vh] bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] bg-clip-text text-transparent">
      Get In Touch
    </h1>
  </div>
</div>



      {/* Card */}
      <div className=" relative mb-[12vh] max-w-5xl mx-auto -mt-[250px] shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Form */}
        <div className="bg-white flex-1 p-10 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Devbysid"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="sid@contentlywriters.com"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          placeholder="Facio ContentlyWriters"
          value={form.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Hi, do you have a moment to talk about..."
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        
        className="w-12 h-12 flex items-center justify-center bg-[#020035] hover:bg-[#5b6cf2] text-white rounded-full ml-auto transition-colors"
      >
        <FaPaperPlane />
      </button>

     <p className={`text-sm mt-2 ${
  status.includes("✅") ? "text-green-600" : "text-red-600"
}`}>
  {status}
</p>

    </form>
        </div>

        {/* Right Info */}
       <div
  className={`relative w-full md:w-1/3 p-10 text-white transition-colors duration-300 ${
    hovering
      ? "bg-[#020035] border-[1px] border-[#ffffff]"
      : "bg-[#5b6cf2] border-[0px] border-[#020035]"
  }`}
>
  <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
  <ul className="space-y-6 relative z-10">
    <li className="flex items-start space-x-4">
      <FaMapMarkerAlt className="text-lg mt-1" />
      <span>
        41 Jadon Nagar B
        <br />
        Durgapura, Jaipur 302018
      </span>
    </li>
    <li className="flex items-center space-x-4">
      <FaPhoneAlt className="text-lg" />
      <span>+91 900-200-300</span>
    </li>
    <li className="flex items-center space-x-4">
      <FaEnvelope className="text-lg" />
      <span>info@example.com</span>
    </li>
  </ul>
  <div className="flex items-center space-x-5 mt-8 relative z-10">
    <a href="#" className="hover:text-black transition-colors">
      <FaLinkedin />
    </a>
    <a href="#" className="hover:text-black transition-colors">
      <FaTwitter />
    </a>
    <a href="#" className="hover:text-black transition-colors">
      <FaFacebookF />
    </a>
  </div>

  {/* Decorative image - right bottom */}
  <Image
     width={500}
      height={500}
    src="/pop-up1.webp" // apni image ka path lagao
    alt="Decor"
   className="absolute -bottom-4 -right-14 w-[180px] md:w-[250px] opacity-30 rotate-60 pointer-events-none"

  />
  
</div>

      </div>
    </section>
  );
}
