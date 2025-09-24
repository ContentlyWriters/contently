import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/lib/mongodb";
import User from "@/models/User";
import ResetToken from "@/models/ResetToken";


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

  
    const resetDoc = await ResetToken.findOne({ token });
    if (!resetDoc || resetDoc.expiresAt < new Date()) {
      return sendResponse("Invalid or expired token", 400);
    }

  
    const hashedPassword = await bcrypt.hash(password, 10);

  
    await User.findByIdAndUpdate(resetDoc.userId, { password: hashedPassword });


    await ResetToken.deleteOne({ _id: resetDoc._id });


    return sendResponse("Password reset successful", 200);

  } catch (error) {
    console.error("Reset password route error:", error);
    return sendResponse("Internal server error", 500);
  }
}
