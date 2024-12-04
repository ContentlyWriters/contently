import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import logo from "@/assets/image/contently-logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



function ContactUs() {
  return (
    <>
      <div className="bg-[#020035] py-8">
      <h1 className="text-[#FFFFFF] lg:text-[80px]  sm:text-[40px] text-[30px] text-center pt-16 sm:pt-20 mx-auto font-semibold">
  Contently Connect
</h1>
<h3 className="text-[#FFFFFF] sm:text-[22px] md:text-[26px] text-[20px] text-center pt-6 sm:pt-10 mx-auto">
  Got a Question or Concern? Drop Us a Mail, and We&#39;ll Help You Out!
</h3>
<p className="text-[#FFFFFF] text-[25px] text-center pt-6 mx-auto lg:pb-2 pb-3">
          
          </p>
        <div className="h-[7px] w-[150px] bg-[#5b6cf2] mx-auto"></div>
      </div>

      <div className="lg:px-32 lg:py-16">
        <div className="!px-6 sm:!px-10 lg:!px-[80px] py-20">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 ">
            <div className="grid gap-2">
              <h2 className="font-semibold">Phone</h2>
              <div>
                <p>
                Tel: <a className="hover:underline hover:text-[#5b6cf2]" href="https://wa.me/+917727851997" rel="noopener noreferrer">+91 7727851997</a>
                </p>
                <p>Contact us on WhatsApp at these hours:</p>
                <p> Monday 10:00 AM – Saturday 06:00 PM</p>
              </div>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Location</h3>
              <div>
                <p>Our company, Facio Contently Writers Private Limited is based in
                Mansarovar, Jaipur 302020</p>
              </div>
              <p>CIN: U82990RJ2024PTC09328</p>
            </div>
            {/* Social Media Section */}
            <div className="grid gap-2">
              <h3 className="font-semibold">Social Media</h3>
              <p>Stay connected with us on:</p>
              <div className="flex space-x-4">
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
                  href="https://x.com/ContentlyW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:scale-110 transition"
                  aria-label="X (Twitter)"
                >
                  <FaSquareXTwitter size={24} />
                </a>
               
          
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Follow us for updates, news, and more!
              </p>
            </div>
            <div className="grid gap-2">
              <h2 className="font-semibold">Email</h2>
              <div>
                <p>If you have any issues regarding any matter or if you are
                just curious drop a mail so we can help you out!</p>
              </div>
              <a
                href="mailto:info@contentlywriters.com"
                className="hover:underline hover:text-[#5b6cf2]"
              >
                info@contentlywriters.com
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ContactUs;
