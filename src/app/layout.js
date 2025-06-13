import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "My Personal Page",
	description: "A collection of my important links and resources",
	manifest: "/manifest.json",
	themeColor: "#2563eb",
	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: "Jordan's Links",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							if ('serviceWorker' in navigator) {
								window.addEventListener('load', function() {
									navigator.serviceWorker.register('/sw.js').then(
										function(registration) {
											console.log('ServiceWorker registration successful');
										},
										function(err) {
											console.log('ServiceWorker registration failed: ', err);
										}
									);
								});
							}
						`,
					}}
				/>
			</head>
			<body className={inter.className}>
				<main>{children}</main>
			</body>
		</html>
	);
}
