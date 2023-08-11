"use client"

import { ReactNode, createContext, useState } from "react"
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
		setMode((prev) => (prev === "dark" ? "light" : "dark"))
	}

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
