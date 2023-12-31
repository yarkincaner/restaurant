"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import styles from "./page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"

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
	const [isFeatured, setIsFeatured] = useState<boolean>(false)

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

	const upload = async () => {
		const data = new FormData()
		data.append("file", file!)
		data.append("upload_preset", "restaurant")

		const res = await fetch(
			`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
			{
				method: "POST",
				body: data,
			}
		)

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
						isFeatured: isFeatured,
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
				<h1 style={{ textAlign: "center", padding: "1rem" }}>
					Add New Product
				</h1>
				<div className={styles.itemGroup}>
					<div className={styles.item}>
						<label htmlFor="file" className={styles.upload}>
							<FontAwesomeIcon icon={faCloudArrowUp} />
							{/* <Image src="/upload.png" alt="" width={30} height={20} /> */}
							<span>{file ? file.name : "Upload Image"}</span>
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
				<div className={styles.itemGroup}>
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
				</div>
				<div className={`${styles.item} theme`}>
					<label>Options</label>
					<div className={styles.item}>
						<div className={styles.itemGroup}>
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
						</div>
						<div className={styles.itemGroup}>
							<div
								className={styles.optionButton}
								onClick={() => setOptions((prev) => [...prev, option])}
							>
								Add Option
							</div>
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
				</div>
				<label className={styles.checkbox}>
					<input
						type="checkbox"
						name="isFeatured"
						checked={isFeatured}
						onChange={() => setIsFeatured((prev) => !prev)}
					/>
					<span style={{ flexShrink: "0" }}>Is Featured?</span>
				</label>
				<div className={styles.item}>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}

export default AddPage
