import styles from "./page.module.css"

type Props = {}

const Orders = (props: Props) => {
	return (
		<div className={styles.container}>
			<table className={styles.table}>
				<thead>
					<tr className={styles.heads}>
						<th className={styles.hiddenCol}>Order ID</th>
						<th>Date</th>
						<th>Price</th>
						<th className={styles.hiddenCol}>Products</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr className={styles.rows}>
						<td className={`${styles.hiddenCol} ${styles.row}`}>13546516834</td>
						<td className={`${styles.row}`}>19.07.2023</td>
						<td className={`${styles.row}`}>89.90</td>
						<td className={`${styles.hiddenCol} ${styles.row}`}>
							Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
						</td>
						<td className={`${styles.row}`}>On the way (approx, 10min)...</td>
					</tr>
					<tr className={styles.rows}>
						<td className={`${styles.hiddenCol} ${styles.row}`}>13546516834</td>
						<td className={`${styles.row}`}>19.07.2023</td>
						<td className={`${styles.row}`}>89.90</td>
						<td className={`${styles.hiddenCol} ${styles.row}`}>
							Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
						</td>
						<td className={`${styles.row}`}>Delivered</td>
					</tr>
					<tr className={styles.rows}>
						<td className={`${styles.hiddenCol} ${styles.row}`}>13546516834</td>
						<td className={`${styles.row}`}>19.07.2023</td>
						<td className={`${styles.row}`}>89.90</td>
						<td className={`${styles.hiddenCol} ${styles.row}`}>
							Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
						</td>
						<td className={`${styles.row}`}>Delivered</td>
					</tr>
					<tr className={styles.rows}>
						<td className={`${styles.hiddenCol} ${styles.row}`}>13546516834</td>
						<td className={`${styles.row}`}>19.07.2023</td>
						<td className={`${styles.row}`}>89.90</td>
						<td className={`${styles.hiddenCol} ${styles.row}`}>
							Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
						</td>
						<td className={`${styles.row}`}>Delivered</td>
					</tr>
					<tr className={styles.rows}>
						<td className={`${styles.hiddenCol} ${styles.row}`}>13546516834</td>
						<td className={`${styles.row}`}>19.07.2023</td>
						<td className={`${styles.row}`}>89.90</td>
						<td className={`${styles.hiddenCol} ${styles.row}`}>
							Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
						</td>
						<td className={`${styles.row}`}>Delivered</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Orders
