import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, role, address, units, notes } = (body ?? {}) as Record<
    string,
    unknown
  >;

  if (!name || !email || !role || !address || !units) {
    return NextResponse.json({ error: "Missing fields." }, { status: 400 });
  }

  try {
    const res = await fetch("https://formspree.io/f/mdaryqjn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _subject: "New waiting list application",
        name,
        email,
        phone,
        role,
        address,
        units,
        notes,
      }),
    });

    if (!res.ok) {
      console.error("Formspree error:", res.status, await res.text());
      return NextResponse.json(
        { error: "Failed to submit application." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
