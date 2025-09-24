import { NextResponse } from "next/server"; 
import bcrypt from "bcryptjs"; 
import connect from "@/lib/mongodb"; 
import User from "@/models/User"; 
import jwt from "jsonwebtoken"; 

export async function POST(req) {
  try {
    await connect();

    const { firstName, lastName, email, password } = await req.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ code: 400, message: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ code: 400, message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Token generate
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Response + cookie
    const response = NextResponse.json({
      code: 201,
      message: "Signup successful",
      token,
      user: {
        id: newUser._id.toString(),
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response; // ✅ yahi return karna hai

  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ code: 500, message: "Internal server error" }, { status: 500 });
  }
}
