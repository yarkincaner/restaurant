"use client"
import Image from "next/image"
import styles from "./component.module.css"
import { useEffect, useState } from "react"

const data = [
	{
		id: 1,
		title: "always fresh & always crispy & always hot",
		image: "/slide1.png",
	},
	{
		id: 2,
		title: "we deliver your order wherever you are in NY",
		image: "/slide2.png",
	},
	{
		id: 3,
		title: "the best pizza to share with your family",
		image: "/slide3.jpg",
	},
]

type Props = {}

const Slider = (props: Props) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	// SLIDER ANIMATION
	useEffect(() => {
		const interval = setInterval(
			() =>
				setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
			3000
		)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={`${styles.container} theme`}>
			<div className={styles.item}>
				<h1 className={styles.title}>{data[currentSlide].title}</h1>
				<button>Order Now</button>
			</div>
			<div className={styles.item}>
				<Image src={data[currentSlide].image} alt="" fill />
			</div>
		</div>
	)
}

export default Slider
