"use client"
import Image from "next/image"
import Link from "next/link"
import styles from "./component.module.css"
import { useCartStore } from "@/utils/store"
import { useEffect } from "react"

type Props = {
	handleClick?: () => void
}

const CartIcon = (props: Props) => {
	const { totalItems } = useCartStore()

	useEffect(() => {
		useCartStore.persist.rehydrate()
	}, [])

	return (
		<Link
			href={`/cart`}
			className={`${props.handleClick ? styles.menuItem : styles.navItem}`}
			onClick={props.handleClick}
		>
			<div className={styles.cartIcon}>
				<Image src={`/cart.png`} alt="" fill />
			</div>
			<span>Cart ({totalItems})</span>
		</Link>
	)
}

export default CartIcon
