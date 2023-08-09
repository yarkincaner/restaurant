import { menu } from "@/data"
import styles from "./page.module.css"
import Link from "next/link"

type Props = {}

const Menu = (props: Props) => {
	return (
		<div className={styles.container}>
			{menu.map((category) => (
				<Link
					key={category.id}
					href={`/menu/${category.slug}`}
					className={styles.itemContainer}
					style={{ backgroundImage: `url(${category.img})` }}
				>
					<div className={styles.item} style={{ color: `${category.color}` }}>
						<h1 className={styles.title}>{category.title}</h1>
						<p className={styles.desc}>{category.desc}</p>
						<button
							className={styles.button}
							style={{
								backgroundColor: `${category.color}`,
								color: `${
									category.color === "black" ? "white" : "var(--primary)"
								}`,
							}}
						>
							Explore
						</button>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Menu
