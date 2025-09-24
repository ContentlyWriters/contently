import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import connect from "@/lib/mongodb";
import User from "@/models/User";
import ResetToken from "@/models/ResetToken";



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


const sendResponse = (message, code = 200, extra = {}) => {
  return NextResponse.json({ code, message, ...extra }, { status: code });
};

export async function POST(req) {
  try {
  
    await connect();

   
    const { email } = await req.json();
    if (!email) {
      return sendResponse("Email is required", 400);
    }

   
    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse("User not found", 404);
    }

    
    const token = crypto.randomBytes(32).toString("hex");

   
    await ResetToken.deleteMany({ userId: user._id });

   
    await ResetToken.create({
      userId: user._id,
      token,
      expiresAt: new Date(Date.now() + 3600 * 1000),
    });

   
    const resetUrl = `${process.env.NEXT_PUBLIC_URL}/reset-password/${token}`;
   await transporter.sendMail({
  from: `"ContentlyWriters Support" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Password Reset Request",
  html: `
  <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden;">
    <div style="background:#5b6cf2; color:white; padding:30px 20px; text-align:center;">
      <h1 style="margin:0; font-size:24px;">Password Reset Request</h1>
      <p style="margin:10px 0 0; font-size:16px;">We received a request to reset your password</p>
    </div>

    <div style="padding:30px 20px; background:#ffffff;">
      <p style="font-size:16px; color:#111;">Hello,</p>
      <p style="font-size:16px; color:#111;">
        You can reset your password by clicking the button below. This link is valid for <strong>1 hour</strong>.
      </p>
      <div style="text-align:center; margin:30px 0;">
        <a href="${resetUrl}" 
           style="background:#5b6cf2; color:white; text-decoration:none; padding:15px 30px; border-radius:6px; font-size:16px; font-weight:bold; display:inline-block;">
          Reset Password 
        </a>
      </div>
      <p style="font-size:14px; color:#6b7280;">
        If you did not request a password reset, please ignore this email or contact support.
      </p>
    </div>

    <div style="background:#f3f4f6; color:#374151; padding:20px; text-align:center; font-size:12px;">
      &copy; ${new Date().getFullYear()} ContentlyWriters. All rights reserved.
    </div>
  </div>
  `,
});


  
    return sendResponse("Reset link sent to your email", 200);

  } catch (err) {
    console.error("Password reset request error:", err);
    return sendResponse("Internal server error", 500);
  }
}
