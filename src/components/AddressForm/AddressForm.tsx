"use client"
import { AddressElement } from "@stripe/react-stripe-js"
import styles from "./component.module.css"

type Props = {}

const AddressForm = (props: Props) => {
	return (
		<form>
			<h3>Address</h3>
			<AddressElement
				options={{ mode: "shipping" }}
				onChange={(event) => {
					if (event.complete) {
						const address = event.value.address
					}
				}}
			/>
		</form>
	)
}

export default AddressForm
