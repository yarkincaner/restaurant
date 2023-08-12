"use client"
import { useEffect } from "react"
import styles from "./page.module.css"
import { useSearchParams, useRouter } from "next/navigation"

type Props = {}

const SuccessPage = (props: Props) => {
	const searchParams = useSearchParams()
	const payment_intent = searchParams.get("payment_intent")
	const router = useRouter()

	useEffect(() => {
		const makeRequest = async () => {
			try {
				await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
					method: "PUT",
				})

				router.push("/orders")
			} catch (error) {
				console.log(error)
			}
		}

		makeRequest()
	}, [payment_intent, router])

	return (
		<div>
			Payment successful! You are being redirected to the orders page. Please do
			not close the page
		</div>
	)
}

export default SuccessPage
