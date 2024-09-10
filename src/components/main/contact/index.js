import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import logo from "@/assets/image/contently-logo.png";

function ContactUs() {
  return (
    <>
      <div className="bg-[#020035] py-8">
        <h1 className="text-[#FFFFFF] sm:text-[50px] lg:text-[80px] text-[40px] text-center pt-20 mx-auto font-semibold">
        Contently Connect
        </h1>
        <h3 className="text-[#FFFFFF] text-[25px] text-center pt-10 mx-auto ">
        Got a Question or Concern? Drop Us a Mail, and We&#39;ll Help You Out!
        </h3>
        <p className="text-[#FFFFFF] text-[25px] text-center pt-3 mx-auto lg:pb-10 pb-3">
          
        </p>
        <div className="h-[7px] w-[150px] bg-[#1A0C87] mx-auto"></div>
      </div>

      <div className="lg:px-32 lg:py-16">
        <div className="!px-6 sm:!px-10 lg:!px-[80px] py-20">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 ">
            <div className="grid gap-2">
              <h2 className="font-semibold">Phone</h2>
              <div>
                <p>
                  Tel: <u>+91 7727851997</u>
                </p>
                <p>Contact us on WhatsApp at these hours:</p>
                <p> Monday 10:00 AM – Saturday 06:00 PM</p>
              </div>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Location</h3>
              <div>
                <p>Our company, Facio Contently Writers Private Limited is based in</p>
                <p>Mansarovar, Jaipur 302020</p>
              </div>
              <p>CIN: U82990RJ2024PTC09328</p>
            </div>
            <Image src={logo} alt="Logo" className="h-[80px] w-[180px]" />
            <div className="grid gap-2">
              <h2 className="font-semibold">Email</h2>
              <div>
                <p>If you have any issues regarding any matter or if you are</p>
                <p>just curious drop a mail so we can help you out!</p>
              </div>
              <a
                href="mailto:info@contentlywriters.com"
                className="hover:underline"
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
