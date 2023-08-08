import Image from "next/image";
import Link from "next/link";
import styles from "./component.module.css";

type Props = {
	handleClick?: () => void;
};

const CartIcon = (props: Props) => {
	return (
		<Link
			href={`/cart`}
			className={`${props.handleClick ? styles.menuItem : styles.navItem}`}
			onClick={props.handleClick}
		>
			<div className={styles.cartIcon}>
				<Image src={`/cart.png`} alt="" fill />
			</div>
			<span>Cart (3)</span>
		</Link>
	);
};

export default CartIcon;
