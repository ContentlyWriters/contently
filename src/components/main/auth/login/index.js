"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InputError from "@/components/ui/input-error";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import logo from "@/assets/image/contently-logo.png";

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null); // User state for synchronization
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: value ? "" : `Please enter ${name}` });
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  // Fetch profile and set user state
  const getProfile = async (token) => {
    try {
      const response = await axios.get("https://contentlywriters.com/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data); // Update user state
    } catch (error) {
      console.error("Error fetching profile:", error);
      localStorage.removeItem("token"); // Clear invalid token
    }
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Validate input
      const error = {};
      if (!formValues.email) error.email = "Please enter email";
      if (!formValues.password) error.password = "Please enter password";
      if (Object.keys(error).length > 0) {
        setErrors(error);
        setLoading(false);
        return;
      }

      // Make login request
      const response = await axios.post(
        "https://contentlywriters.com/api/user/login",
        formValues
      );

      // Handle successful response
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        await getProfile(response.data.token); // Fetch and set user profile
        toast.success("Login Successful!");
        router.replace("/"); // Redirect to homepage
      } else {
        setErrors({ password: "Invalid credentials" });
      }
    } catch (err) {
      console.error(err);
      setErrors({ email: "User does not exist" });
    } finally {
      setLoading(false);
    }
  };

  // Handle Google authentication
  const handleGoogleAuth = () => {
    window.location.href =
      "http://www.contentlywriters.com:8088/oauth2/authorization/google";
  };

  // Sync user state on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile(token); // Verify and fetch profile on page load
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-lg sm:w-[400px] p-8">
        <h1 className="text-3xl font-bold text-center pb-10">
          <Link href="/">
            <div className="flex items-center justify-center">
              <Image
                src={logo}
                alt="Contently Logo"
                className="h-[80px] w-[180px]"
              />
            </div>
          </Link>
        </h1>
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <InputError message={errors.email} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <span className="relative w-full flex items-center">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={formValues.password}
                onChange={handleChange}
              />
              {!showPassword ? (
                <AiFillEyeInvisible
                  onClick={togglePasswordVisibility}
                  className="absolute right-2.5 text-gray-500 text-xl cursor-pointer"
                />
              ) : (
                <AiFillEye
                  onClick={togglePasswordVisibility}
                  className="absolute right-2.5 text-gray-500 text-xl cursor-pointer"
                />
              )}
            </span>
            <InputError message={errors.password} />
          </div>
          <Link href="/forgot-password" className="underline">
            Forgot Password
          </Link>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
            ) : (
              "Login"
            )}
          </Button>
          <div className="text-center">
            Don&#39;t have an account?{" "}
            <Link href="/sign-up" className="underline">
              Register
            </Link>
          </div>
          <Button type="button" onClick={handleGoogleAuth}>
            <FcGoogle className="mr-5 text-2xl" />
            Login with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
