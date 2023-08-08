import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Hello World</h1>
			<p>This is a text</p>
			<form action="">
				<input type="text" placeholder="Placeholder..." />
				<textarea cols="30" rows="10" placeholder="Placeholder..."></textarea>
				<textarea cols="30" rows="10" placeholder="Placeholder..."></textarea>
				<textarea cols="30" rows="10" placeholder="Placeholder..."></textarea>
				<textarea cols="30" rows="10" placeholder="Placeholder..."></textarea>
				<textarea cols="30" rows="10" placeholder="Placeholder..."></textarea>
			</form>
		</main>
	);
}
