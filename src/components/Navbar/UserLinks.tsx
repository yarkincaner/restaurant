"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import styles from "./component.module.css"

type Props = {}

const UserLinks = (props: Props) => {
	const { status, data: session } = useSession()

	return (
		<div>
			{status === "authenticated" ? (
				<div style={{ display: "flex", gap: "1rem" }}>
					{session.user.isAdmin && (
						<Link href={`/add`} className={styles.navItem}>
							Add
						</Link>
					)}
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
