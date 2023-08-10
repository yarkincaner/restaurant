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
		console.log(open)
	}

	return (
		<div>
			<Image
				src={open ? "/close.png" : "/open.png"}
				alt=""
				width={20}
				height={20}
				onClick={handleClick}
			/>
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
