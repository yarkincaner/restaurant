import Image from "next/image"
import styles from "./component.module.css"
import { Product } from "@/types/types"

const getData = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
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

const Featured = async (props: Props) => {
	const featuredProducts: Product[] = await getData()

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{featuredProducts.map((product) => (
					<div key={product.id} className={styles.item}>
						{product.img && (
							<div className={styles.imgContainer}>
								<Image src={product.img} alt="" fill className={styles.img} />
							</div>
						)}
						<div className={styles.textContainer}>
							<h1 className={styles.title}>{product.title}</h1>
							<p className={styles.desc}>{product.desc}</p>
							<span className={styles.price}>${product.price}</span>
							<button>Add to Cart</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Featured
