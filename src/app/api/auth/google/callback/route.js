// src/app/api/auth/google/callback/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) return NextResponse.json({ error: "No code provided" }, { status: 400 });

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = `${process.env.NEXT_PUBLIC_URL}/api/auth/google/callback`;

  // Exchange code for access token
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) return NextResponse.json({ error: "Failed to get access token" }, { status: 400 });

  // Get user info
  const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });
  const userData = await userRes.json();

  const [firstName, ...rest] = userData.name.split(" ");
  const lastName = rest.join(" ") || "";

  await connect();

  // ✅ DB me user save karo ya find
  let user = await User.findOne({ email: userData.email });
  if (!user) {
    user = await User.create({
      firstName,
      lastName,
      email: userData.email,
      provider: "google"
    });
  }

  // JWT me user id/email include karo
  const token = jwt.sign(
    { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName, provider: user.provider },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/?token=${token}`);
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
    sameSite: "lax",
  });

  return response;
}
