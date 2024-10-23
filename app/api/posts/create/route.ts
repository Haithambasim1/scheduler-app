import Post from "../../../../models/Post.model";
import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/database/mongodb";
import { verifayAuthToken } from "../../../../lib/auth";

export async function POST(request: Request) {
  await dbConnect();

  const token = request.headers.get("Authorization")?.split(" ")[1];

  const userId = verifayAuthToken(token);
  if (!userId)
    return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });

  try {
    const { content, scheduledAt, socialMedia } = await request.json();

    const newPost = await Post.create({
      content,
      scheduledAt,
      socialMedia,
      userId,
      status: "scheduled",
    });
    await newPost.save();
    console.log(newPost);
    return NextResponse.json(
      {
        meesage: "Post created successfully  ",
        post: newPost,
      },
      { status: 201 }
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
