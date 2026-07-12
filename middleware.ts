import { NextRequest, NextResponse } from "next/server";

const VERCEL_HOST = "darrenemedo.vercel.app";
const CANONICAL_HOST = "darrenemedo.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === VERCEL_HOST) {
    const url = new URL(request.url);
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
