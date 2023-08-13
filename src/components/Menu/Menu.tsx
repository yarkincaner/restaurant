"use client"
import Image from "next/image"
import styles from "./component.module.css"
import { useState } from "react"
import Link from "next/link"
import CartIcon from "../CartIcon/CartIcon"
import { ThemeSwitcher } from ".."

const links = [
	{ id: 1, title: "Home", url: "/" },
	{ id: 2, title: "Menu", url: "/menu" },
	{ id: 3, title: "Working Hours", url: "/" },
	{ id: 4, title: "Contact", url: "/" },
]

type Props = {}

const Menu = (props: Props) => {
	const [open, setOpen] = useState(false)

	// TEMPORARY
	const user = false

	const handleClick = () => {
		setOpen((prev) => !prev)
	}

	return (
		<div>
			<input type="checkbox" id={styles.menu} />
			<label
				className={`${styles.hamb} ${styles.button} ${open && styles.active}`}
				htmlFor="menu"
				onClick={handleClick}
			>
				<span className={`${styles.srOnly}`}>Open Menu</span>
				<svg className={`${styles.ham}`} viewBox="0 0 100 100">
					<path
						className={`${styles.line} ${styles.top}`}
						d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
					></path>
					<path
						className={`${styles.line} ${styles.middle}`}
						d="m 30,50 h 40"
					></path>
					<path
						className={`${styles.line} ${styles.bottom}`}
						d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
					></path>
				</svg>
			</label>
			{open && (
				<div className={styles.menuContainer}>
					<ThemeSwitcher />
					{links.map((item) => (
						<Link
							className={styles.menuItem}
							key={item.id}
							href={item.url}
							onClick={handleClick}
						>
							{item.title}
						</Link>
					))}
					{user ? (
						<Link
							className={styles.menuItem}
							href="/orders"
							onClick={handleClick}
						>
							Orders
						</Link>
					) : (
						<Link
							className={styles.menuItem}
							href="/login"
							onClick={handleClick}
						>
							Login
						</Link>
					)}
					<CartIcon handleClick={handleClick} />
				</div>
			)}
		</div>
	)
}

export default Menu
