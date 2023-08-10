"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./component.module.css"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

type Props = {
	id: number
	price: number
	options?: { title: string; additionalPrice: number }[]
}

const Price = (props: Props) => {
	const [total, setTotal] = useState(props.price)
	const [quantity, setQuantity] = useState(1)
	const [selected, setSelected] = useState(0)

	useEffect(() => {
		setTotal(
			quantity *
				(props.options
					? props.price + props.options[selected].additionalPrice
					: props.price)
		)
	}, [quantity, selected, props.options, props.price])

	return (
		<div className={styles.container}>
			<h2 className={styles.price}>${total.toFixed(2)}</h2>
			<div className={styles.options}>
				{props.options?.map((option, index) => (
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
				<button className={styles.button}>Add to Cart</button>
			</div>
		</div>
	)
}

export default Price
