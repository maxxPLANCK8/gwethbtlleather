import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/blog");
  revalidatePath("/collections/[slug]", "page");
  revalidatePath("/products/[slug]", "page");

  return NextResponse.json({
    revalidated: true,
    timestamp: new Date().toISOString()
  });
}
