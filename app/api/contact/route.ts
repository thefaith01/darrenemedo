import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { isEmail, boundedString } from "@/lib/validate";
import { rateLimit, clientIp } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  const rl = rateLimit(`contact:${clientIp(req)}`, 5, 10 * 60_000);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;
  const cleanName = boundedString(name, 100);
  const cleanMessage = boundedString(message, 4000);

  if (!cleanName) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!cleanMessage) {
    return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  }

  try {
    await sendContactEmail({ name: cleanName, email: email as string, message: cleanMessage });
  } catch (err) {
    console.error("Contact message failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
