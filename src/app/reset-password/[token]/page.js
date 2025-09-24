"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleReset = async () => {
    setMessage(null);

    if (!password || !confirm) {
      setMessage({ type: "error", text: "Please fill in all fields ❌" });
      return;
    }

    if (password !== confirm) {
      setMessage({ type: "error", text: "Passwords do not match ❌" });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/reset-password/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message });
        setTimeout(() => {
          router.push("/"); 
        }, 2000);
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong ❌" });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Server error ❌" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>

        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded ${
              message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b6cf2]"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b6cf2]"
        />
        <button
          onClick={handleReset}
          disabled={loading}
          className={`w-full bg-[#5b6cf2] text-white py-3 rounded-lg transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#4a5be0]"
          }`}
        >
          {loading ? "Processing..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
}
