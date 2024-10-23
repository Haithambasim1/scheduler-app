import Post from "../../../../models/Post.model";
import dbConnect from "../../../../lib/database/mongodb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  await dbConnect();

  try {
    const posts = await Post.find({ userId: params.userId }).sort({
      scheduledAt: -1,
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { message: "Error feaching data", error },
      { status: 500 }
    );
  }
}
