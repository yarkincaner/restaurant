"use client"

import { ReactNode, createContext, useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

type ThemeContextType = {
	toggle: () => void
	mode: "dark" | "light"
}

export const ThemeContext = createContext<ThemeContextType>({
	toggle: () => {},
	mode: "light",
})

interface IProvider {
	children?: ReactNode
}

export const ThemeProvider = ({ children }: IProvider) => {
	const [mode, setMode] = useState<"dark" | "light">("light")

	const toggle = () => {
		switch (mode) {
			case "light":
				localStorage.setItem("darkTheme", "dark")
				setMode("dark")
				break
			case "dark":
				localStorage.setItem("darkTheme", "light")
				setMode("light")
		}
	}

	useEffect(() => {
		const storedPreference = localStorage.getItem("darkTheme")
		switch (storedPreference) {
			case "dark":
				setMode("dark")
				break
			case "light":
				setMode("light")
				break
		}
	}, [])

	return (
		<ThemeContext.Provider value={{ toggle, mode }}>
			<body className={`theme ${mode}`}>
				{children}
				<ToastContainer
					position="bottom-right"
					theme={mode === "dark" ? "dark" : "light"}
					autoClose={3000}
				/>
			</body>
		</ThemeContext.Provider>
	)
}
