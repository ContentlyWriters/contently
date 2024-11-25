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
import { useUserContext } from "@/context/auth";
import logo from "@/assets/image/contently-logo.png";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { axiosInstance } from "@/lib/axios";

export default function LoginScreen() {
  const { getProfile } = useUserContext();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false); // State for checkbox
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Check localStorage for terms acceptance
    const savedAcceptance = localStorage.getItem("termsAccepted");
    if (savedAcceptance === "true") {
      setTermsAccepted(true);
    }
  }, []);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [name]: `Please enter ${name}`,
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleTermsChange = (e) => {
    const isChecked = e.target.checked;
    setTermsAccepted(isChecked);

    // Save terms acceptance to localStorage
    localStorage.setItem("termsAccepted", isChecked.toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const newErrors = {};
      if (!formValues.email) newErrors.email = "Please enter email";
      if (!formValues.password) newErrors.password = "Please enter password";
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setLoading(false);
        return;
      }

      const { data } = await axiosInstance.post(
        "https://contentlywriters.com/api/user/login",
        formValues
      );

      localStorage.setItem("token", data.token);

      if (!data.token) {
        setErrors({ password: "Please check your password" });
        setLoading(false);
        return;
      }

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 5000,
      });

      getProfile();

      router.replace("/");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (err) {
      console.error(err);
      setErrors({ email: "User does not exist" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    if (!termsAccepted) {
      toast.error("Please accept Terms & Conditions before logging in!");
      return;
    }
    window.location.href =
      "http://www.contentlywriters.com:8088/oauth2/authorization/google";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-lg sm:w-[400px] p-8">
        <h1 className="text-3xl font-bold text-center pb-10">
          <Link href="/">
            <div className="flex items-center justify-center">
              <Image
                src={logo}
                alt="Pangram Logo"
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
            <div className="relative w-full">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={formValues.password}
                onChange={handleChange}
              />
              {showPassword ? (
                <AiFillEye
                  onClick={togglePasswordVisibility}
                  className="absolute right-2.5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={togglePasswordVisibility}
                  className="absolute right-2.5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
              )}
            </div>
            <InputError message={errors.password} />
          </div>
          <Link href="/forgot-password" className="underline">
Forgot Password
</Link>
<div className="flex items-center">
  <input
    type="checkbox"
    id="terms"
    checked={termsAccepted}
    onChange={handleTermsChange}
    className="mr-2"
  />
  <label htmlFor="terms" className="text-[12px] ">
    I agree to the{" "}
    <Link href="/terms-and-conditions" target="_blank" className="underline text-[12px]">
      Terms & Conditions
    </Link>{" "}
    and{" "}
    <Link href="/privacy-policy" target="_blank" className="underline text-[12px]">
      Privacy Policy
    </Link>
  </label>
</div>


          <Button type="submit" disabled={!termsAccepted || loading}>
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





