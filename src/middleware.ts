import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        // If the user visits /admin/login, we don't need to do anything extra 
        // because withAuth handles session checking.
        // If they are not authenticated, withAuth redirects to the sign-in page automatically.

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                // Only allow if token exists (user is logged in)
                // You can add role checks here too, e.g. token.role === 'admin'

                // Exclude /admin/login from protection to avoid redirect loop 
                // if you have a custom login page at /admin/login
                if (req.nextUrl.pathname.startsWith("/admin/login")) {
                    return true;
                }

                return !!token;
            },
        },
        pages: {
            signIn: '/admin/login', // Redirect here if not authenticated
        }
    }
);

export const config = {
    matcher: ["/admin/:path*"], // Protect all routes starting with /admin
};
