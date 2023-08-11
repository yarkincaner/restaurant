import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/types"

const getData = async (category: string) => {
	const response = await fetch(
		`http://localhost:3000/api/products?cat=${category}`,
		{
			cache: "no-store",
		}
	)

	if (!response.ok) {
		throw new Error("Failed!")
	}

	return response.json()
}

type Props = {
	params: {
		category: string
	}
}

const Category = async (props: Props) => {
	const products: Product[] = await getData(props.params.category)

	return (
		<div className={styles.container}>
			{products.map((item) => (
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
