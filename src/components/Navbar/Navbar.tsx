import Link from "next/link"
import { Menu, ThemeSwitcher } from ".."
import styles from "./component.module.css"
import CartIcon from "../CartIcon/CartIcon"
import Image from "next/image"

type Props = {}

const Navbar = (props: Props) => {
	const user = false
	return (
		<div className={`${styles.container} theme`}>
			{/* LEFT LINKS */}
			<div className={styles.navItems}>
				<Link href={`/`} className={styles.navItem}>
					Home
				</Link>
				<Link href={`/menu`} className={styles.navItem}>
					Menu
				</Link>
				<Link href={`/contact`} className={styles.navItem}>
					Contact
				</Link>
			</div>
			{/* LOGO */}
			<div className={styles.logoContainer}>
				<Link href="/">
					<h3 className={styles.logo}>RESTAURANT</h3>
				</Link>
			</div>
			{/* MOBILE MENU */}
			<div className={styles.menu}>
				<Menu />
			</div>
			{/* RIGHT LINKS */}
			<div className={styles.navItems}>
				<div className={styles.phone}>
					<Image src={`/phone.png`} alt="" width={15} height={15} />
					<span>123 456</span>
				</div>
				{user ? (
					<Link href={`/orders`} className={styles.navItem}>
						Orders
					</Link>
				) : (
					<Link href={`/login`} className={styles.navItem}>
						Login
					</Link>
				)}
				<CartIcon />
				<ThemeSwitcher />
			</div>
		</div>
	)
}

export default Navbar
