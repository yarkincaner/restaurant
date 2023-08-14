"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./component.module.css"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { Product } from "@/types/types"
import { useCartStore } from "@/utils/store"
import { toast } from "react-toastify"

type Props = {
	product: Product
}

const Price = ({ product }: Props) => {
	const [total, setTotal] = useState<number>(product.price)
	const [quantity, setQuantity] = useState(1)
	const [selected, setSelected] = useState(0)

	const { addToCart } = useCartStore()

	useEffect(() => {
		useCartStore.persist.rehydrate()
	}, [])

	useEffect(() => {
		if (product.options?.length) {
			setTotal(
				quantity * +product.price + +product.options[selected].additionalPrice
			)
		}
	}, [quantity, selected, product])

	const handleCart = () => {
		addToCart({
			id: product.id,
			title: product.title,
			img: product.img,
			price: total,
			...(product.options?.length && {
				optionTitle: product.options[selected].title,
			}),
			quantity: quantity,
		})

		toast.success("The product added to the cart!")
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.price}>${total}</h2>
			<div className={styles.options}>
				{product.options?.length &&
					product.options?.map((option, index) => (
						<button
							className={styles.option}
							key={option.title}
							style={{
								backgroundColor:
									selected === index ? "var(--primary)" : "transparent",
								color: selected === index ? "var(--white)" : "var(--primary)",
							}}
							onClick={() => setSelected(index)}
						>
							{option.title}
						</button>
					))}
			</div>
			<div className={styles.quantityContainer}>
				<div className={styles.quantity}>
					<span>Quantity</span>
					<div className={styles.icons}>
						<FontAwesomeIcon
							icon={faMinus}
							className={styles.icon}
							onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
						/>
						<span>{quantity}</span>
						<FontAwesomeIcon
							icon={faPlus}
							className={styles.icon}
							onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
						/>
					</div>
				</div>
				<button className={styles.button} onClick={handleCart}>
					Add to Cart
				</button>
			</div>
		</div>
	)
}

export default Price
