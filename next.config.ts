import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

const withNextIntl = createNextIntlPlugin("./src/i18n/request.tsx"); // ✅ Use a string directly


/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// swcMinify: true,
	bundlePagesRouterDependencies: true,
	images: {
		domains: [
			'localhost',
			'res.cloudinary.com',
			'*.cloudinary.com'
			// Add other domains if needed (e.g., your production domain)
		],
	},
	// images: {
	// 	minimumCacheTTL: 60,
	// 	formats: ["image/avif", "image/webp"], // ✅ Correct type
	// 	dangerouslyAllowSVG: true,
	// 	contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	// },
};

export default withNextIntl(nextConfig);