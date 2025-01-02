import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/me"];
const authPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken");

  if (privatePaths.includes(pathname) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authPaths.includes(pathname) && sessionToken) {
    return NextResponse.redirect(new URL("/me", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/me", "/login", "/register"],
};
