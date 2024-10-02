import React from "react";
import Link from "next/link";

export default function DashBoardFooter() {
  return (
    <footer className="bg-[#020035]  py-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Footer Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-white text-sm md:text-base">
            <li>
              <Link href={"/revision-policy"} className="hover:underline hover:text-gray-400 transition-colors duration-300 transform hover:scale-105">
                Revision Policy
              </Link>
            </li>
            <li>
              <Link href={"/terms-and-conditions"} className="hover:underline hover:text-gray-400 transition-colors duration-300 transform hover:scale-105">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href={"/plagiarism-policy"} className="hover:underline hover:text-gray-400 transition-colors duration-300 transform hover:scale-105">
                Plagiarism Policy
              </Link>
            </li>
            <li>
              <Link href={"/privacy-policy"} className="hover:underline hover:text-gray-400 transition-colors duration-300 transform hover:scale-105">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"/refund-policy"} className="hover:underline hover:text-gray-400 transition-colors duration-300 transform hover:scale-105">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright Notice */}
        <div className="text-white text-sm text-center mt-4">
          © {new Date().getFullYear()} Facio Contently Writers Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
