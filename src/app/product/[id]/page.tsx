import Image from "next/image"
import styles from "./page.module.css"
import { singleProduct } from "@/data"
import { Price } from "@/components"

type Props = {
	params: {
		id: string
	}
}

const Product = (props: Props) => {
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
				<Price
					id={singleProduct.id}
					price={singleProduct.price}
					options={singleProduct.options}
				/>
			</div>
		</div>
	)
}

export default Product
