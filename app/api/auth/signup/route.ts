import { NextResponse } from "next/server";
import User from "../../../../models/User.model";
import dbConnect from "../../../../lib/database/mongodb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "please enter a valid credentials" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
