import Link from "next/link"
import styles from "./component.module.css"

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer className={styles.container}>
			<Link href={`/`} className={styles.link}>
				RESTAURANT
			</Link>
			<p>© ALL RIGHTS RESERVED.</p>
		</footer>
	)
}

export default Footer
