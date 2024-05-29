import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
    ],
    ignoreRoutes: [
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};