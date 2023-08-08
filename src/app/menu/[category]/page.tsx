type Props = {
	params: {
		category: string;
	};
};

const Category = (props: Props) => {
	return (
		<div>
			<h1>{props.params.category}</h1>
		</div>
	);
};

export default Category;
