import { NextResponse } from "next/server";

export async function GET(req) {
  const redirectUri = `${process.env.NEXT_PUBLIC_URL}/api/auth/google/callback`;
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const scope = encodeURIComponent("email profile openid");

  const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&access_type=offline&prompt=consent`;

  return NextResponse.redirect(url);
}
