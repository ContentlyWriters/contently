import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Contact from "@/models/Contact";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    await connect();

    // ✅ Get token from header
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ success: false, error: "No token provided" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 });
    }

    // ✅ Decode token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 });
    }

    // ✅ Filter queries by this user
    const userEmail = decoded.email;
    const queries = await Contact.find({ email: userEmail }).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, queries });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
