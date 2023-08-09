import Image from "next/image"
import styles from "./component.module.css"
import { CountDown } from ".."

type Props = {}

const Offer = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Delicious Burger & French Fry</h1>
				<p className={styles.desc}>
					Progressively simplify effective e-toilers and process-centric methods
					of empowerment. Quickly pontificate parallel.
				</p>
				<CountDown />
				<button className={styles.button}>Order Now</button>
			</div>
			<div className={`${styles.item} ${styles.imgContainer}`}>
				<Image src={`/offerProduct.png`} alt="" fill className={styles.img} />
			</div>
		</div>
	)
}

export default Offer
