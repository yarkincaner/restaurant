import Link from "next/link"
import { Menu, ThemeSwitcher } from ".."
import styles from "./component.module.css"
import CartIcon from "../CartIcon/CartIcon"
import Image from "next/image"
import UserLinks from "./UserLinks"

type Props = {}

const Navbar = (props: Props) => {
	return (
		<nav className={`${styles.container} theme`}>
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
				<div className={styles.phone}>
					<Image src={`/phone.png`} alt="" width={15} height={15} />
					<span>123 456</span>
				</div>
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
			<div className={`${styles.navItems} ${styles.flexEnd}`}>
				<UserLinks />
				<CartIcon />
				<ThemeSwitcher />
			</div>
		</nav>
	)
}

export default Navbar
