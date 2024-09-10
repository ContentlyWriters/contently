import Image from "next/image";
import Link from "next/link";
import img from "@/assets/image/Essential-Minimal-Payment-Icons-removebg-preview copy.png";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#020035] text-white px-6 sm:px-10 lg:px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex py-4 items-start flex-col md:flex-row gap-4">
          <div className="flex md:gap-[150px] gap-10 w-full md:flex-row flex-col">
            <ul className="grid gap-2">
              <li className="font-semibold"><h4>Company</h4></li>
              <li>
                <Link className="text-md hover:text-[#8e8e9e] hover:underline" href="/about">
                  <h5>About Us</h5>
                </Link>
              </li>
              <li>
                <Link className="text-md hover:text-[#8e8e9e] hover:underline" href="/#faq">
                  <h5>FAQ</h5>
                </Link>
              </li>
              <li>
                <Link className="text-md hover:text-[#8e8e9e] hover:underline" href="/contact">
                  <h5>Contacts</h5>
                </Link>
              </li>
              <li>
                <Link className="text-md hover:text-[#8e8e9e] hover:underline" href="/blog">
                  <h5>Blog</h5>
                </Link>
              </li>
            </ul>
            <ul className="grid gap-2">
              <li className="font-semibold"><h4>Terms</h4></li>
              <li>
                <Link className="text-md hover:text-[#8e8e9e] hover:underline" href="/terms-and-conditions">
                  <h5>Terms & Conditions</h5>
                </Link>
              </li>
              <li>
                <Link className="text-md hover:text-[#8e8e9e] hover:underline" href="/privacy-policy">
                  <h5>Privacy Policy</h5>
                </Link>
              </li>
              <li>
                <Link className="text-md hover:text-[#8e8e9e] hover:underline" href="/refund-policy">
                  <h5>Refund Policy</h5>
                </Link>
              </li>
              <li>
                <Link className="text-md hover:text-[#8e8e9e] hover:underline" href="/revision-policy">
                  <h5>Revision Policy</h5>
                </Link>
              </li>
              <li>
                <Link className="text-md hover:text-[#8e8e9e] hover:underline" href="/plagiarism-policy">
                  <h5>Plagiarism Policy</h5>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-start md:items-end flex-col gap-1 w-full">
            <ul className="grid gap-2">
              <li className="font-semibold"><h4>We Accept</h4></li>
              <li>
                <Image src={img} alt="payment" width={250} height={250} className="w-full" />
              </li>
              <li className="font-semibold">
                {/* Facio Contently Writers Private Limited */}
              </li>
              {/* <li className="text-md">
                <p>Address: Kiran Path Mansarovar,</p>
                <p>Rajasthan, Jaipur, 302020</p>
              </li> */}
            </ul>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="my-10">
          <h1 className="font-semibold pb-4">Disclaimer</h1>
          <p className="font-normal opacity-80">
            Our materials are designed to support you in conducting research and completing your
          </p>
          <p className="font-normal opacity-80">
            assignments independently. It is important to utilize them only with appropriate
          </p>
          <p className="font-normal opacity-80">
            references and citations to maintain academic integrity.
          </p>
        </div>
        <div className="flex justify-between lg:flex-row flex-col gap-5">
          <p className="text-white">
            Copyright © 2024 Facio Contently Writers Private Limited. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <Link href="mailto:info@contentlywriters.com" className="text-black-400 hover:text-[#8e8e9e]">
              <MdOutlineMail />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61558643577094" className="text-black-400 hover:text-[#8e8e9e]">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/contentlywriters/" className="text-black-400 hover:text-[#8e8e9e]">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com/ContentlyW" className="text-black-400 hover:text-[#8e8e9e]">
              <FaXTwitter />
            </Link>
            <Link href="https://www.linkedin.com/company/facio-contently-writers/" className="text-black-400 hover:text-[#8e8e9e]">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
