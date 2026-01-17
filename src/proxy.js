import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
const privateRoute = ["/item"];
export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const isPrivate = privateRoute.some((route) => pathname.startsWith(route));

  if (!token && isPrivate) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set('callbackUrl',pathname)
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/item/:path*"],
};
