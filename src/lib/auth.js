import jwt from "jsonwebtoken";

export function getTokenFromHeader(token) {
  try {
    // JWT verify karo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id; // token me user id store karni chahiye
  } catch (err) {
    console.error("JWT verify error:", err);
    return null;
  }
}
