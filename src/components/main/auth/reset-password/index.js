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
import { useSearchParams } from "next/navigation";
import { useUserContext } from "@/context/auth";
import logo from "@/assets/image/contently-logo.png";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { axiosInstance } from "@/lib/axios";
export default function ResetPasswordScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    confirmPassword: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    confirmPassword: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({
        ...errors,
        [name]: `Please enter ${name
          .split(/(?=[A-Z])/)
          .map((data) => data.toLowerCase())
          .join(" ")}`,
      });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const validatePassword = (password) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasLetter && hasNumber && hasSpecialChar;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const error = {};
      //   if (!formValues.email) error.email = "Please enter email";
      if (!formValues.password) error.password = "Please enter password";
      if (!validatePassword(formValues.password)) {
        error.password =
          "Password must contain at least one letter, one number, and one special character";
      }
      if (formValues.password !== formValues.confirmPassword) {
        error.confirmPassword = "Passwords do not match";
      }
      if (Object.keys(error).length > 0) {
        setErrors(error);
        return;
      }
      const response = await axiosInstance.post(
        `reset-password?token=${token}`,
        {
          password: formValues.password,
        }
      );

      toast.success("Password Reset Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.replace("/login");
      setLoading(false);
    } catch (err) {
      console.log(err);
      const error = {};
      error.email = "Something went wrong";
      setErrors(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-lg sm:w-[400px]  p-8 ">
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
        <h1 className="text-2xl font-semibold pb-4">Reset Password</h1>
        <form className="grid gap-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="login">Password</Label>
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
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="confirmPassword">Confirm Password</Label>

            <span className="relative w-full flex items-center">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your Password"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              {!showConfirmPassword ? (
                <AiFillEyeInvisible
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-2.5 text-gray-500 text-xl cursor-pointer"
                />
              ) : (
                <AiFillEye
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-2.5 text-gray-500 text-xl cursor-pointer"
                />
              )}
            </span>
            <InputError message={errors.confirmPassword} />
          </div>

          <Link href="/login" className="underline">
            Login
          </Link>
          <Button type="button" disabled={loading} onClick={handleSubmit}>
            {loading ? (
              <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
            ) : (
              "Forget Password"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
