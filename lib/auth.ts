import jwt from "jsonwebtoken";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

if (!JWT_SECRET_KEY) {
  throw new Error("please provide a JWT secret");
}
export function verifayAuthToken(token: string | undefined) {
  try {
    if (!token) {
      return null;
    }
    const decoded = jwt.verify(token, JWT_SECRET_KEY) as { userId: string };
    return decoded.userId;
  } catch (error) {
    console.error("failed to verify token", error);
    return null;
  }
}
