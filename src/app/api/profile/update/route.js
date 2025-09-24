import connect from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function PUT(req) {
  try {
    await connect();

    // 1️⃣ Token get karo
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token)
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });

    // 2️⃣ JWT verify
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded JWT:", decoded); // debug
    } catch (err) {
      return new Response(
        JSON.stringify({ message: "Invalid or expired token" }),
        { status: 401 }
      );
    }

    const userId = decoded.userId;
    if (!userId)
      return new Response(
        JSON.stringify({ message: "User ID missing in token" }),
        { status: 401 }
      );

    // 3️⃣ Request body
    const { firstName, lastName } = await req.json();
    if (!firstName || !lastName) {
      return new Response(
        JSON.stringify({ message: "First and Last name required" }),
        { status: 400 }
      );
    }

    // 4️⃣ Update user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName },
      { new: true }
    );

    if (!updatedUser) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // 5️⃣ Response
    return new Response(JSON.stringify({ user: updatedUser }), { status: 200 });
  } catch (err) {
    console.error("Profile update error:", err);
    return new Response(
      JSON.stringify({ message: "Server error. Try again later." }),
      { status: 500 }
    );
  }
}
