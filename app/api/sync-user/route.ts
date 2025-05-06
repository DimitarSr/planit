
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id, email, firstName, lastName } = body;

  try {
    await prisma.user.upsert({
      where: { id },
      update: {
        email,
        firstName,
        lastName,
      },
      create: {
        id,
        email,
        firstName,
        lastName,
      },
    });

    return new Response("User synced", { status: 200 });
  } catch (error) {
    console.error("[SYNC_USER_ERROR]", error);
    return new Response("Error syncing user", { status: 500 });
  }
}
