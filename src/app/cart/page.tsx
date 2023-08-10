import Image from "next/image"
import styles from "./page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

type Props = {}

const Cart = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.item}>
					<Image src={`/temporary/p1.png`} alt="" width={100} height={100} />
					<div>
						<h1 className={styles.cartItemTi1tle}>Sicilian</h1>
						<span>Large</span>
					</div>
					<h2>$79.90</h2>
					<FontAwesomeIcon icon={faClose} className={styles.icon} />
				</div>
				<div className={styles.item}>
					<Image src={`/temporary/p1.png`} alt="" width={100} height={100} />
					<div>
						<h1 className={styles.cartItemTi1tle}>Sicilian</h1>
						<span>Large</span>
					</div>
					<h2>$79.90</h2>
					<FontAwesomeIcon icon={faClose} className={styles.icon} />
				</div>
				<div className={styles.item}>
					<Image src={`/temporary/p1.png`} alt="" width={100} height={100} />
					<div>
						<h1 className={styles.cartItemTi1tle}>Sicilian</h1>
						<span>Large</span>
					</div>
					<h2>$79.90</h2>
					<FontAwesomeIcon icon={faClose} className={styles.icon} />
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.total}>
					<span>Subtotal (3 items)</span>
					<span>$81.70</span>
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
					<span style={{ fontWeight: "bold" }}>$81.70</span>
				</div>
				<button className={styles.button}>Chekout</button>
			</div>
		</div>
	)
}

export default Cart
