import React from "react";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold text-red-600">Unauthorized Access</h1>
        <p className="mt-4 text-xl">You do not have permission to view this page.</p>
      </div>
    </div>
  );
};

export default Unauthorized;
