import styles from "./page.module.css"
import { Featured, Offer, Slider } from "@/components"

export default function Home() {
	return (
		<main>
			<Slider />
			<Featured />
			<Offer />
		</main>
	)
}
