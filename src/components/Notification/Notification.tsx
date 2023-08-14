import styles from "./component.module.css"

type Props = {}

const Notification = (props: Props) => {
	return (
		<div className={`${styles.container} theme`}>
			<p>Free delivery for all orders over $50. Order your food now!</p>
		</div>
	)
}

export default Notification
