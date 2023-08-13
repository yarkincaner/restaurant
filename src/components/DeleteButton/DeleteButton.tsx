"use client"
import Image from "next/image"
import styles from "./component.module.css"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

type Props = {
	id: string
}

const DeleteButton = ({ id }: Props) => {
	const { data: session, status } = useSession()
	const router = useRouter()

	if (status === "loading") {
		return <p>Loading...</p>
	}

	if (status === "unauthenticated" || !session?.user.isAdmin) {
		return
	}

	const handleDelete = async () => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
			{
				method: "DELETE",
			}
		)

		if (res.status === 200) {
			router.push("/menu")
			toast("The product has been deleted!")
		} else {
			const data = await res.json()
			toast.error(data.message)
		}
	}

	return (
		<button className={styles.container} onClick={handleDelete}>
			<Image src="/delete.png" alt="" width={20} height={20} />
		</button>
	)
}

export default DeleteButton
