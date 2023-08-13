import { Categories } from "@/types/types"
import styles from "./page.module.css"
import Link from "next/link"

const getData = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
		{
			cache: "no-store",
		}
	)

	if (!response.ok) {
		throw new Error("Failed!")
	}

	return response.json()
}

type Props = {}

const Menu = async (props: Props) => {
	const categories: Categories = await getData()

	return (
		<div className={styles.container}>
			{categories.map((category) => (
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
