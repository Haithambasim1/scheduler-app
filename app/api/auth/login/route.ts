import User from "../../../../models/User.model";
import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/database/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export async function POST(request: Request) {
  await dbConnect();

  const { email, password } = await request.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ meesage: "user not found" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "password mismatch" },
        { status: 400 }
      );
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, {
      expiresIn: "3600m",
    });

    return NextResponse.json(
      { message: "login succeffully", token, userId: user._id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        meesage: "internal error",
      },
      { status: 500 }
    );
  }
}
