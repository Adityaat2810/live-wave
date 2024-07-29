import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define the routes that should NOT be protected
const publicRoutes = createRouteMatcher([
  '/sign-up(.*)',
  '/sign-in(.*)'
]);

export default clerkMiddleware((auth, req) => {
  // If the route is not a public route, protect it
  if (!publicRoutes(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};