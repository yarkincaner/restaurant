"use client"
import { useEffect, useState } from "react"
import styles from "./component.module.css"

type Props = {}

const CountDown = (props: Props) => {
	let difference = +new Date(`10/10/2023`) - +new Date()
	const [delay, setDelay] = useState(difference)

	const d = Math.floor(difference / (1000 * 60 * 60 * 24))
	const h = Math.floor((difference / (1000 * 60 * 60)) % 24)
	const m = Math.floor((difference / 1000 / 60) % 60)
	const s = Math.floor((difference / 1000) % 60)

	useEffect(() => {
		const timer = setInterval(() => {
			setDelay(delay - 1)
		}, 1000)

		if (delay === 0) {
			clearInterval(timer)
		}

		return () => {
			clearInterval(timer)
		}
	})

	return (
		<span className={styles.timer}>
			{d}:{h}:{m}:{s}
		</span>
	)
}

export default CountDown
