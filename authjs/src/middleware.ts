/** @format */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/../auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  if (request.nextUrl.pathname.startsWith("/user") && !session?.user?.id)
    return NextResponse.redirect(new URL("/login", request.url));
  else if (
    (request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/register")) &&
    session?.user?.id
  )
    return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/user", "/login", "/register"],
};
