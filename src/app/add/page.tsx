"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import styles from "./page.module.css"

type Inputs = {
	title: string
	desc: string
	price: number
	catSlug: string
}

type Option = {
	title: string
	additionalPrice: number
}

const AddPage = () => {
	const { data: session, status } = useSession()
	const [inputs, setInputs] = useState<Inputs>({
		title: "",
		desc: "",
		price: 0,
		catSlug: "",
	})

	const [option, setOption] = useState<Option>({
		title: "",
		additionalPrice: 0,
	})

	const [options, setOptions] = useState<Option[]>([])
	const [file, setFile] = useState<File>()

	const router = useRouter()

	if (status === "loading") {
		return <p>Loading...</p>
	}

	if (status === "unauthenticated" || !session?.user.isAdmin) {
		router.push("/")
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOption((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement
		const item = (target.files as FileList)[0]
		setFile(item)
	}

	// TODO: Fix the error: "fetch has been blocked by CORS policy. No 'Access-Control-Allow-Origin' header is present on the requested resource"
	const upload = async () => {
		const data = new FormData()
		data.append("file", file!)
		data.append("upload_preset", "restaurant")

		const res = await fetch("https://api.cloudinary.com/v1_1/dgpwtxipn/image", {
			method: "POST",
			headers: {
				"Content-Type": "multipart/form-data",
				"Access-Control-Allow-Origin": "http://localhost:3000" || "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers":
					"Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
				"Access-Control-Max-Age": "86400",
			},
			body: data,
		})

		const resData = await res.json()
		return resData.url
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const url = await upload()
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
				{
					method: "POST",
					body: JSON.stringify({
						img: url,
						...inputs,
						options,
					}),
				}
			)

			const data = await res.json()

			router.push(`/product/${data.id}`)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h1>Add New Product</h1>
				<div className={styles.item}>
					<label htmlFor="file">
						<Image src="/upload.png" alt="" width={30} height={20} />
						<span>Upload Image</span>
					</label>
					<input
						type="file"
						onChange={handleChangeImg}
						id="file"
						className={styles.hidden}
					/>
				</div>
				<div className={styles.item}>
					<label>Title</label>
					<input
						type="text"
						placeholder="Bella Napoli"
						name="title"
						onChange={handleChange}
					/>
				</div>
				<div className={styles.item}>
					<label>Description</label>
					<textarea
						rows={3}
						placeholder="A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil and creamy mozzarella."
						name="desc"
						onChange={handleChange}
					/>
				</div>
				<div className={styles.item}>
					<label>Price</label>
					<input
						type="number"
						placeholder="29"
						name="price"
						onChange={handleChange}
					/>
				</div>
				<div className={styles.item}>
					<label>Category</label>
					<input
						type="text"
						placeholder="pizzas"
						name="catSlug"
						onChange={handleChange}
					/>
				</div>
				<div className={`${styles.item} ${styles.optionsContainer}`}>
					<label>Options</label>
					<div className={styles.item}>
						<input
							type="text"
							placeholder="Title"
							name="title"
							onChange={changeOption}
						/>
						<input
							type="number"
							placeholder="Additional Price"
							name="additionalPrice"
							onChange={changeOption}
						/>
						<div
							className={styles.optionButton}
							onClick={() => setOptions((prev) => [...prev, option])}
						>
							Add Option
						</div>
					</div>
					<div>
						{options.map((opt) => (
							<div
								className={styles.option}
								key={opt.title}
								onClick={() =>
									setOptions((prev) =>
										prev.filter((item) => item.title !== opt.title)
									)
								}
							>
								<span>{opt.title}</span>
								<span> (+ ${opt.additionalPrice})</span>
							</div>
						))}
					</div>
				</div>
				<div className={styles.item}>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}

export default AddPage
