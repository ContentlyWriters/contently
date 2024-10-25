"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InputError from "@/components/ui/input-error";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/auth";
import logo from "@/assets/image/contently-logo.png";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

export default function ForGotPasswordScreen() {
  const { getProfile } = useUserContext();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const error = {};
      if (!formValues.email) error.email = "Please enter email";
      if (Object.keys(error).length > 0) {
        setErrors(error);
        return;
      }
      const response = await axiosInstance.post(
        `https://contentlywriters.com:8088/reset-password/send-email?email=${formValues.email}`
      );

      console.log({ response: response.data });

      //   if (response.data.token == null) {
      //     const error = {};
      //     error.password = "Please check your password";
      //     setErrors(error);
      //     setLoading(false);
      //     return;
      //   }

      toast.success("Email send success to reset password!", {
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
        <h1 className="text-2xl font-semibold pb-4">Forgot Password</h1>
        <form className="grid gap-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="login">Email</Label>
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
