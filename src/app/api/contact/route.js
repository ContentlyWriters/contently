import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Contact from "@/models/Contact";

const sendResponse = (message, code = 200, extra = {}) => {
  return NextResponse.json({ code, message, ...extra }, { status: code });
};

export async function POST(req) {
  try {
    await connect(); // DB connect

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return sendResponse("Name, email, and message are required", 400);
    }

    // 1️⃣ Save in DB
    const newMessage = new Contact({
      name,
      email,
      message,
      subject: subject || "N/A",
    });
    await newMessage.save();

    // 2️⃣ Mail transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // must be Gmail App Password
      },
    });

    // 3️⃣ Send email
    const info = await transporter.sendMail({
      from: `"ContentlyWriters" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🎉 New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden;">
          <div style="background:#5b6cf2; color:white; padding:20px; text-align:center;">
            <h2 style="margin:0;">🎉 Congratulations!</h2>
            <p style="margin:5px 0 0;">You have received a new enquiry</p>
          </div>
          <div style="padding:20px; background:#f9fafb;">
            <h3 style="margin-top:0; color:#111;">Customer Details</h3>
            <table style="width:100%; border-collapse:collapse;">
              <tr><td><b>Name</b></td><td>${name}</td></tr>
              <tr><td><b>Email</b></td><td>${email}</td></tr>
              <tr><td><b>subject</b></td><td>${subject || "N/A"}</td></tr>
              <tr><td><b>Message</b></td><td>${message}</td></tr>
            </table>
          </div>
          <div style="background:#f3f4f6; color:#374151; padding:15px; text-align:center; font-size:14px;">
            <p style="margin:0;">📩 This enquiry was received via <b>ContentlyWriters</b> contact form.</p>
          </div>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);

    return sendResponse("Enquiry sent successfully", 200, { success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return sendResponse("Failed to send enquiry", 500, { success: false, error: error.message });
  }
}
