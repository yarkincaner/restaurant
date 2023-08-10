import Image from "next/image"
import styles from "./page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

type Props = {}

const Login = (props: Props) => {
	return (
		<div className={styles.mainContainer}>
			{/* BOX */}
			<div className={`${styles.container} theme`}>
				{/* IMAGE CONTAINER */}
				<div className={styles.imageContainer}>
					<Image src={`/loginBg.png`} alt="" fill className={styles.image} />
				</div>
				{/* FORM CONTAINER */}
				<div className={styles.formContainer}>
					<h1 className={styles.title}>Welcome</h1>
					<p>Log into your account or create a new one using social buttons</p>
					<button className={styles.signIn}>
						{/* <FontAwesomeIcon icon={faGoogle} color="#4285f4" /> */}
						<Image
							src="/google.png"
							alt=""
							width={20}
							height={20}
							className={styles.icon}
						/>
						<span>Sign in with Google</span>
					</button>
					<button className={styles.signIn}>
						{/* <FontAwesomeIcon icon={faFacebook} color="#3b5998" /> */}
						<Image
							src="/facebook.png"
							alt=""
							width={20}
							height={20}
							className={styles.icon}
						/>
						<span>Sign in with Facebook</span>
					</button>
					<p className={styles.contact}>
						Have a problem?{" "}
						<Link href={`/`} className={styles.link}>
							Contact us
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Login
