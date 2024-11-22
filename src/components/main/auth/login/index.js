"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible, AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoginScreen() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors as user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};
    if (!formValues.email) newErrors.email = "Please enter your email.";
    if (!formValues.password) newErrors.password = "Please enter your password.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      // API call to login
      const { data } = await axios.post(
        "https://contentlywriters.com/api/user/login",
        formValues
      );

      console.log("Login Response:", data);

      // Save token to localStorage
      localStorage.setItem("token", data.token);

      // Redirect user after login
      toast.success("Login successful!");
      router.replace("/");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);

      // Show error feedback
      setErrors({
        email: error.response?.data?.message || "Invalid email or password.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    window.location.href = "http://www.contentlywriters.com:8088/oauth2/authorization/google";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-lg sm:w-[400px] p-8">
        <h1 className="text-3xl font-bold text-center pb-10">Login</h1>
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border px-4 py-2"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full border px-4 py-2"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? <AiOutlineLoading3Quarters className="animate-spin mx-auto" /> : "Login"}
          </button>
        </form>
        <button
          className="mt-4 w-full flex items-center justify-center bg-gray-200 py-2 rounded"
          onClick={handleGoogleAuth}
        >
          <FcGoogle className="mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
}
