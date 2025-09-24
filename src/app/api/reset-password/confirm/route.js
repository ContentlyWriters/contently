import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import ResetToken from "@/models/ResetToken";
import User from "@/models/User";
import bcrypt from "bcryptjs";


const sendResponse = (message, code = 200, extra = {}) => {
  return NextResponse.json({ code, message, ...extra }, { status: code });
};

export async function POST(req) {
  try {
    
    await connect();

  
    const { token, password } = await req.json();
    if (!token || !password) {
      return sendResponse("Token and password are required", 400);
    }

   
    const resetToken = await ResetToken.findOne({ token });
    if (!resetToken || resetToken.expiresAt < new Date()) {
      return sendResponse("Invalid or expired token", 400);
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

   
    await User.findByIdAndUpdate(resetToken.userId, { password: hashedPassword });

   
    await ResetToken.deleteOne({ _id: resetToken._id });

  
    return sendResponse("Password updated successfully", 200);

  } catch (err) {
    console.error("Reset password error:", err);
    return sendResponse("Internal server error", 500);
  }
}
