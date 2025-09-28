import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await connect();

    const { email, password } = await req.json();
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // ✅ Token generate
   const token = jwt.sign(
  { 
    userId: user._id, 
    email: user.email,
    firstName: user.firstName,  
    lastName: user.lastName    
  },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);

   const response = NextResponse.json({
  message: "Signin successful",
  token, // ✅ frontend ke liye
  user: {
    id: user._id.toString(),
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  },
});

// Cookie me bhi save
response.cookies.set("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 7 * 24 * 60 * 60,
  sameSite: "lax",
});

return response;



  } catch (err) {
    console.error("Signin error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
