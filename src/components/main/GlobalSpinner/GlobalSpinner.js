// components/.js
import React from "react";

export default function GlobalSpinner({ show }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 border-white rounded-full"></div>
    </div>
  );
}
