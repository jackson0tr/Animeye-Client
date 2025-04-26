import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";

type Props = {
	children: ReactNode;
};

export const metadata: Metadata = {
	icons: {
		shortcut: "/favicon.svg",
		icon: "/favicon.svg",
	},
};

export default function RootLayout({ children }: Props) {
	return children;
}