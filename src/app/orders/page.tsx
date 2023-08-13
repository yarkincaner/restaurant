"use client"
import { Order } from "@/types/types"
import styles from "./page.module.css"
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { FormEvent } from "react"
import { toast } from "react-toastify"

type Props = {}

const Orders = (props: Props) => {
	const { data: session, status } = useSession()
	const router = useRouter()

	if (status === "unauthenticated") {
		router.push("/")
	}

	const { isLoading, error, data } = useQuery({
		queryKey: ["orders"],
		queryFn: () =>
			fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`).then((res) =>
				res.json()
			),
	})

	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: ({ id, status }: { id: string; status: string }) => {
			return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(status),
			})
		},
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ["orders"] })
		},
	})

	const handleUpdate = (e: FormEvent<HTMLFormElement>, id: string) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const input = form.elements[0] as HTMLInputElement
		const status = input.value

		mutation.mutate({ id, status })
		toast.success("The order status has been changed!")
	}

	if (isLoading || status === "loading") return "Loading..."

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
					{data.map((item: Order) => (
						<tr
							key={item.id}
							className={`${styles.rows} ${
								item.status !== "delivered" && `${styles.delivered}`
							}`}
						>
							<td className={`${styles.hiddenCol} ${styles.row}`}>{item.id}</td>
							<td className={`${styles.row}`}>
								{item.createdAt.toString().slice(0, 10)}
							</td>
							<td className={`${styles.row}`}>{item.price}</td>
							<td className={`${styles.hiddenCol} ${styles.row}`}>
								{item.products.map((cartItem) => cartItem.title).join(", ")}
							</td>
							{session?.user.isAdmin ? (
								<td className={`${styles.row}`}>
									<form
										className={`${styles.form}`}
										onSubmit={(e) => handleUpdate(e, item.id)}
									>
										<input
											placeholder={item.status}
											className={`${styles.input}`}
										/>
										<button className={`${styles.button}`}>
											<Image src="/edit.png" alt="" width={20} height={20} />
										</button>
									</form>
								</td>
							) : (
								<td className={`${styles.row}`}>{item.status}</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Orders
