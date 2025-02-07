"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/image/contently-logo.png";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState(""); // Updated from enquiry to message

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry Submitted by ${name}`);
  };

  return (
    <>
      <div className="bg-[#020035] py-8">
        <h1 className="text-[#FFFFFF] lg:text-[80px] sm:text-[40px] text-[30px] text-center pt-16 sm:pt-20 mx-auto font-semibold">
          Contently Connect
        </h1>
        <h3 className="text-[#FFFFFF] sm:text-[22px] md:text-[26px] text-[20px] text-center pt-6 sm:pt-10 mx-auto">
          Got a Question or Concern? Drop Us a Mail, and We&#39;ll Help You Out!
        </h3>
        <p className="text-[#FFFFFF] text-[25px] text-center pt-6 mx-auto lg:pb-2 pb-3"></p>
        <div className="h-[7px] w-[150px] bg-[#5b6cf2] mx-auto"></div>
      </div>

      {/* Two-column layout */}
      <div className="lg:px-32 lg:py-16 flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Left Side - Location & Social Media */}
        <div className="w-full md:w-1/2 space-y-10">
          {/* Location Section */}
          <div className="grid gap-2 text-center md:text-left">
            <h3 className="font-semibold text-lg mt-10 md:mt-0">Location</h3>
            <p>Our company, Facio Contently Writers Private Limited is based in Mansarovar, Jaipur 302020</p>
            <p>CIN: U82990RJ2024PTC09328</p>
          </div>

          {/* Social Media Section */}
          <div className="grid gap-2 text-center md:text-left">
            <h3 className="font-semibold text-lg">Social Media</h3>
            <p>Stay connected with us on:</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/company/facio-contently-writers/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61568632033503"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:scale-110 transition"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/contentlywriters/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-110 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:info@contentlywriters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000] hover:scale-110 transition"
                aria-label="Mail"
              >
                <IoMdMail size={24} />
              </a>
              <a
                href="https://wa.me/+917727851997"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:scale-110 transition"
                aria-label="WhatsApp"
              >
                <IoLogoWhatsapp size={24} />
              </a>
              <a
                href="https://www.youtube.com/@ContentlyWriters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:scale-110 transition"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Follow us for updates, news, and more!
            </p>
          </div>
        </div>

        {/* Right Side - Enquiry Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 shadow-md rounded-lg border-2 border-black">
          <h2 className="text-xl font-semibold text-center mb-4">Enquiry Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-2 p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-2 p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-2 p-2 rounded mt-4"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              className="w-full border-2 p-2 rounded mt-4"
              rows="4"
              value={message} // Updated from enquiry to message
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
