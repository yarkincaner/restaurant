"use client"
import Image from "next/image"
import styles from "./page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { useCartStore } from "@/utils/store"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

type Props = {}

const Cart = (props: Props) => {
	const { products, totalItems, totalPrice, removeFromCart } = useCartStore()
	const { data: session } = useSession()
	const router = useRouter()

	useEffect(() => {
		useCartStore.persist.rehydrate()
	}, [])

	const handleCheckout = async () => {
		if (!session) {
			router.push("/")
		} else {
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`,
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							price: totalPrice,
							products,
							status: "Not Paid!",
							userEmail: session.user.email,
						}),
					}
				)

				const data = await res.json()
				router.push(`/pay/${data.id}`)
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				{products.map((product) => (
					<div key={product.id} className={`${styles.item} theme`}>
						{product.img && (
							<Image src={product.img} alt="" width={100} height={100} />
						)}
						<div>
							<h1 className={styles.cartItemTitle}>
								{product.title} x{product.quantity}
							</h1>
							<span>{product.optionTitle}</span>
						</div>
						<h2>${product.price}</h2>
						<FontAwesomeIcon
							icon={faClose}
							className={styles.icon}
							onClick={() => removeFromCart(product)}
						/>
					</div>
				))}
			</div>
			<div className={`${styles.right} theme`}>
				<div className={styles.total}>
					<span>Subtotal ({totalItems} items)</span>
					<span>${totalPrice}</span>
				</div>
				<div className={styles.total}>
					<span>Service Cost</span>
					<span>$0.00</span>
				</div>
				<div className={styles.total}>
					<span>Delivary Cost</span>
					<span style={{ color: "#22c55e" }}>FREE!</span>
				</div>
				<hr className={styles.line} />
				<div className={styles.total}>
					<span>TOTAL (INCL VAT)</span>
					<span style={{ fontWeight: "bold" }}>${totalPrice}</span>
				</div>
				<button className={styles.button} onClick={handleCheckout}>
					Chekout
				</button>
			</div>
		</div>
	)
}

export default Cart
