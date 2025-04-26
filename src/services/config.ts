import { Pathnames } from "next-intl/navigation";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL || "https://animeye-beta.vercel.app/"
	? `https://${process.env.VERCEL_URL}`
	: `http://localhost:${port}`;

export const defaultLocale = "en" as const;
export const locales = ["en", "ar"] as const;

export const pathnames = {
	"/": "/",
	"/contact": "/contact",
	"/terms": "/terms",
	"/about": "/about",
	"/sign-in": "/sign-in",
	"/sign-up": "/sign-up",
} satisfies Pathnames<typeof locales>;

// Use the arfault: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;