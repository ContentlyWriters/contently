import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import connect from "@/lib/mongodb";
import User from "@/models/User";
import ResetToken from "@/models/ResetToken";


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
    
      return sendResponse("If the email exists, a reset link will be sent", 200);
    }

    
    await ResetToken.deleteMany({ userId: user._id });

  
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await ResetToken.create({ userId: user._id, token, expiresAt });

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password/${token}`;

    await transporter.sendMail({
      from: `"FCW Support" <${process.env.GMAIL_USER}>`,
      to: user.email,
      subject: "Password Reset Request",
      html: `
        <p>You requested a password reset. Click the link below:</p>
        <a href="${resetLink}" style="background:#5b6cf2;color:white;padding:10px 20px;border-radius:5px;text-decoration:none;">Reset Password</a>
        <p>This link expires in 1 hour.</p>
      `,
    });

 
    return sendResponse("If the email exists, a reset link will be sent", 200);

  } catch (err) {
    console.error("Password reset request error:", err);
    return sendResponse("Internal server error", 500);
  }
}
