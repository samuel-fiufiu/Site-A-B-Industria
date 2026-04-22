import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta",
	subsets: ["latin"],
});

const manrope = Manrope({
	variable: "--font-manrope-display",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "A&B Industria",
	description: "Site institucional da A&B Industria em OpenNext com Cloudflare.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body className={`${plusJakartaSans.variable} ${manrope.variable} antialiased`}>{children}</body>
		</html>
	);
}
