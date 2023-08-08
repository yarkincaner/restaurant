type Props = {
	params: {
		id: string;
	};
};

const Product = (props: Props) => {
	return (
		<div>
			<h1>{props.params.id}</h1>
		</div>
	);
};

export default Product;
