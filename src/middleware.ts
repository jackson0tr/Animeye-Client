import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix, defaultLocale } from "./services/config";

const intlMiddleware = createMiddleware({
	defaultLocale,
	locales,
	pathnames,
	localePrefix,
});

export function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname;

	// Apply next-intl middleware for locale handling
	const intlResponse = intlMiddleware(req);
	if (intlResponse) return intlResponse;

	// If no locale is detected, rewrite to default locale (/ar)
	return NextResponse.rewrite(new URL(`/en${pathname}`, req.url));
}

export const config = {
	matcher: [
		"/", // Enable a redirect to a matching locale at the root
		"/(en|ar)/:path*", // Set a cookie for locale
		"/((?!_next|_vercel|.*\\..*).*)", // Redirect missing locales
	],
};