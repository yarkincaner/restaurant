import { pizzas } from "@/data"
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"

type Props = {
	params: {
		category: string
	}
}

const Category = (props: Props) => {
	return (
		<div className={styles.container}>
			{pizzas.map((item) => (
				<Link className={styles.item} href={`/product/${item.id}`}>
					{item.img && (
						<div className={styles.imgContainer}>
							<Image src={item.img} alt="" fill className={styles.img} />
						</div>
					)}
					<div className={styles.textContainer}>
						<h1 className={styles.title}>{item.title}</h1>
						<h2 className={styles.price}>${item.price}</h2>
						<button className={styles.button}>Add to Cart</button>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Category
