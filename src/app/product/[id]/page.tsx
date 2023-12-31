import Image from "next/image"
import styles from "./page.module.css"
import { DeleteButton, Price } from "@/components"
import { Product } from "@/types/types"

const getData = async (id: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
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
		id: string
	}
}

const Product = async (props: Props) => {
	const singleProduct: Product = await getData(props.params.id)

	return (
		<div className={styles.container}>
			{/* IMAGE CONTAINER */}
			{singleProduct.img && (
				<div className={`${styles.item} ${styles.imgContainer}`}>
					<Image src={singleProduct.img} alt="" className={styles.img} fill />
				</div>
			)}
			{/* TEXT CONTAINER */}
			<div className={`${styles.item} ${styles.detailsContainer}`}>
				<h1 className={styles.title}>{singleProduct.title}</h1>
				<p className={styles.desc}>{singleProduct.desc}</p>
				<Price product={singleProduct} />
			</div>
			{/* DELETE BUTTON */}
			<DeleteButton id={singleProduct.id} />
		</div>
	)
}

export default Product
