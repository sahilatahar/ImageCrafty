import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "ImageGenius",
	description:
		"ImageGenius offers a versatile toolkit for generating images with ease. ",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} max-w-6xl mx-auto bg-bgLight text-sand-800 px-2 md:px-4`}
			>
				{children}
			</body>
		</html>
	)
}
