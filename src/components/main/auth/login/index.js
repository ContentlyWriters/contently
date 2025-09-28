"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Notification from "@/components/main/notification";
import { AiFillEye, AiFillEyeInvisible  } from "react-icons/ai";
import { useUserContext } from "@/context/AuthContext";

export default function AuthModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); 
  const [mode, setMode] = useState("login"); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const [isSending, setIsSending] = useState(false); 
const [dotCount, setDotCount] = useState(0);
const { setIsLoggedIn } = useUserContext();

  const handleGoogleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = "https://fcw-swart.vercel.app/api/auth/google/callback";
    const scope = "openid email profile";

    const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&prompt=consent`;

    window.location.href = url; 
  };

useEffect(() => {
  let interval;
  if (isSending) {
    interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 5); 
    }, 500); 
  } else {
    setDotCount(0);
  }

  return () => clearInterval(interval);
}, [isSending]);

const getButtonText = () => {
  if (isSending) return `Sending${".".repeat(dotCount)}`;
  return "Send Reset Link";
};


const notificationRef = useRef();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

 
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setMode("login");
      setEmail("");
      setPassword("");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
      setErrors({});
      setError("");
    }
  }, [isOpen]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContinue = () => {
    if (!email) return setError("Please enter your email.");
    if (!validateEmail(email)) return setError("Please enter a valid email address.");
    setError("");
    setStep(2);
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!validateEmail(form.email)) newErrors.email = "Invalid email format";

    if (!form.password) newErrors.password = "Password is required";
    else {
      if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
      if (!/[A-Z]/.test(form.password)) newErrors.password = "Password must contain at least one uppercase letter";
      if (!/[0-9]/.test(form.password)) newErrors.password = "Password must contain at least one number";
      if (!/[!@#$%^&*]/.test(form.password)) newErrors.password = "Password must contain at least one special character";
    }

    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!form.terms) newErrors.terms = "You must accept the terms & conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
     console.log("Form being sent:", form);
    if (!validateSignup()) return;

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

   if (res.ok) {
  notificationRef.current.showNotification("Signup successful ✅", "success");
  setMode("login");
  setStep(1);
  setEmail(form.email);
  setForm({ firstName:"", lastName:"", email:"", password:"", confirmPassword:"", terms:false });
} else {
  notificationRef.current.showNotification(data.message || "Something went wrong ⚠️", "warning");
}

    } catch (err) {
      console.error(err);
     notificationRef.current.showNotification("Server error ", "error");
    }
  };

const handleLogin = async () => {
  if (!email || !password) return setError("Email and password are required");

  try {
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include", // ✅ cookie ke liye
    });

    const data = await res.json();
    console.log("LOGIN RESPONSE:", data);

    if (res.ok && data.token) {
      // ✅ localStorage me token save
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setIsLoggedIn(true); // context update

      notificationRef.current.showNotification("Login successful ✅", "success");

      // ✅ Direct dashboard redirect
      window.location.href = "/"; 
    } else {
      notificationRef.current.showNotification(
        data.message || "Invalid credentials ❌",
        "warning"
      );
    }
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    notificationRef.current.showNotification("Something went wrong ⚠️", "error");
  }
};




  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]"
          onClick={onClose}
        >
      <motion.div
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: -50, opacity: 0 }}
  transition={{ duration: 0.3 }}
  className="bg-white rounded-md shadow-2xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[360px] border-black border-2 relative mx-4 sm:mx-auto"
  onClick={(e) => e.stopPropagation()}
>

           
            <button className="absolute top-3 right-3 text-gray-800 hover:text-black" onClick={onClose}>✕</button>

            <h2 className="text-2xl font-semibold mb-6 text-center text-[#020035]">
              {mode === "login" && "Welcome To FCW"}
              {mode === "signup" && "Create Your Account"}
              {mode === "reset" && "Reset Your Password"}
            </h2>

            {mode === "login" && (
              <>
                {step === 1 && (
                  <>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 mb-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b6cf2] text-black placeholder-gray-400"
                    />
                    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                  <button className="w-full bg-[#020035] text-white py-3 rounded-lg font-medium relative overflow-hidden transition mb-5 group" onClick={handleContinue}>
  {/* Normal Text */}
  <span className="inline-block group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300">
    Continue
  </span>

  {/* Arrow on hover */}
  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
    ➔
  </span>
</button>


                    <div className="flex items-center mb-5">
                      <div className="flex-1 h-px bg-gray-300"></div>
                      <span className="px-3 text-gray-500 text-sm">OR</span>
                      <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <button onClick={() => {
    window.location.href = "/api/auth/google";
  }} className="w-full bg-white flex items-center justify-center gap-3 border border-black py-3 rounded-lg mb-3 hover:text-[#5b6cf2] transition">
                      <FcGoogle size={22} />
                      <span className="font-medium text-black">Continue with Google</span>
                    </button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 mb-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b6cf2] text-black placeholder-gray-400"
                    />
                    <button
                      className="w-full  bg-[#020035] hover:text-[#4a5be0] text-white py-3 rounded-lg font-medium  transition mb-5"
                      onClick={handleLogin}
                    >
                      Login
                    </button>

                    <div className="flex justify-between text-sm text-[#020035]">
                      <button onClick={() => { setMode("signup"); setStep(1); }} className="hover:underline">Create Account</button>
                      <button onClick={() => { setMode("reset"); setStep(1); }} className="hover:underline">Reset Password</button>
                    </div>
                  </>
                )}
              </>
            )}

         
            {mode === "signup" && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
             
                
                  <form className="space-y-5" onSubmit={handleSignup}>
                    {/* First + Last */}
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value.replace(/^\s+|\s+$/g, '')  })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-[#5b6cf2]" />
                      <input type="text" placeholder="Last Name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value.replace(/^\s+|\s+$/g, '')  })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-[#5b6cf2]" />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}

                    <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value.toLowerCase() })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-[#5b6cf2]" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

                    <div className="relative">
                      <input type={showPassword ? "text" : "password"} placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-[#5b6cf2]" />
                      <span className="absolute right-3 top-2.5 cursor-pointer text-black" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</span>
                      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div className="relative">
                      <input type={showConfirm ? "text" : "password"} placeholder="Confirm Password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-[#5b6cf2]" />
                      <span className="absolute right-3 top-2.5 cursor-pointer text-black" onClick={() => setShowConfirm(!showConfirm)}>{showConfirm ? <AiFillEyeInvisible /> : <AiFillEye />}</span>
                      {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <div className="flex items-center">
                      <input type="checkbox" checked={form.terms} onChange={(e) => setForm({ ...form, terms: e.target.checked })} className="mr-2" />
                      <label className="text-gray-700 text-sm">I agree to the <a href="/terms" className="text-[#5b6cf2] font-medium hover:underline">Terms & Conditions</a></label>
                    </div>
                    {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}

                    <button type="submit" className="w-full bg-[#020035] hover:text-[#4a5be0] text-white font-semibold py-2 rounded-lg transition">Sign Up</button>
                  </form>

                  <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <button onClick={() => { setMode("login"); setStep(1); setEmail(""); }} className="text-[#5b6cf2] font-medium hover:underline">Sign In</button>
                  </p>
              
              </motion.div>
            )}

         {mode === "reset" && (
  <>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email to reset"
      className="w-full px-4 py-3 mb-3 border text-black border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b6cf2]"
    />

  <button
  className="w-full bg-[#020035] hover:text-[#4a5be0] text-white py-3 rounded-lg font-medium transition mb-5"
  onClick={async () => {
    if (!email) {
      notificationRef.current.showNotification("Please enter your email");
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch("/api/reset-password/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        notificationRef.current.showNotification("Reset link sent! Check your email", "success");
        setMode("login");
        setStep(1);
      } else {
        notificationRef.current.showNotification(data.error || "Something went wrong", "warning");
      }
    } catch (err) {
      console.error(err);
      notificationRef.current.showNotification("Server error", "error");
    } finally {
      setIsSending(false);
    }
  }}
>
  {getButtonText()}
</button>


    <p className="text-sm text-center text-gray-600">
      Back to{" "}
      <button
        onClick={() => {
          setMode("login");
          setStep(1);
        }}
        className="text-[#5b6cf2] hover:underline"
      >
        Login
      </button>
    </p>
  </>
)}
 <Notification ref={notificationRef} />
          </motion.div>
      
        </motion.div>
      )}
    </AnimatePresence>
  );
}