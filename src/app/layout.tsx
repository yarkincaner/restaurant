import {
	AuthProvider,
	Footer,
	Navbar,
	Notification,
	QueryProvider,
} from "@/components"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/context/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Restaurant",
	description: "Best food in town!",
	icons: {
		icon: "/cart.png",
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<ThemeProvider>
				<AuthProvider>
					<QueryProvider>
						<div className={`${inter.className}`}>
							<Notification />
							<Navbar />
							{children}
							<Footer />
						</div>
					</QueryProvider>
				</AuthProvider>
			</ThemeProvider>
		</html>
	)
}
