import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // Check if the request is for a protected route
  const isProtectedRoute = [
    "/my-account",
    "/my-deals",
    "/settings",
    "/saved-offers",
    "/my-discussions",
  ].some((path) => req.nextUrl.pathname.startsWith(path));

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
