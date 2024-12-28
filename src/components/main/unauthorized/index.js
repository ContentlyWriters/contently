"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold text-red-600">Unauthorized Access</h1>
        <p className="mt-4 text-xl">You do not have permission to view this page.</p>
        <div className="mt-6">
          <Link href="/">
            <Button className="bg-[#5b6cf2] hover:bg-gray-800 px-6 py-2 text-white">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
