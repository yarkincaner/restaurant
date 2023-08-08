"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./component.module.css";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

type Props = {};

const ThemeSwitcher = (props: Props) => {
	const { mode, toggle } = useContext(ThemeContext);

	return (
		<div className={styles.container} onClick={toggle}>
			{mode === "dark" ? (
				<FontAwesomeIcon icon={faMoon} className={styles.icon} />
			) : (
				<FontAwesomeIcon icon={faSun} className={styles.icon} />
			)}
		</div>
	);
};

export default ThemeSwitcher;
