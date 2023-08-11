"use client"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import styles from "./component.module.css"

type Props = {}

const UserLinks = (props: Props) => {
	const { status } = useSession()

	return (
		<div>
			{status === "authenticated" ? (
				<div style={{ display: "flex", gap: "1rem" }}>
					<Link href={`/orders`} className={styles.navItem}>
						Orders
					</Link>
					<span onClick={() => signOut()} className={styles.navItem}>
						Logout
					</span>
				</div>
			) : (
				<Link href={`/login`} className={styles.navItem}>
					Login
				</Link>
			)}
		</div>
	)
}

export default UserLinks
