"use client";

import { ReactNode, createContext, useState } from "react";

type ThemeContextType = {
	toggle: () => void;
	mode: "dark" | "light";
};

export const ThemeContext = createContext<ThemeContextType>({
	toggle: () => {},
	mode: "dark",
});

interface IProvider {
	children?: ReactNode;
}

export const ThemeProvider = ({ children }: IProvider) => {
	const [mode, setMode] = useState<"dark" | "light">("dark");

	const toggle = () => {
		setMode((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ toggle, mode }}>
			<body className={`theme ${mode}`}>{children}</body>
		</ThemeContext.Provider>
	);
};
