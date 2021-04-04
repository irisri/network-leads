import React from "react";
import "./Shop.css";
import { productServices } from "../../services/productServices";
import { FilterForm } from "../FilterForm/FilterForm";
import { ProductsList } from "../ProductsList/ProductsList";

export class Shop extends React.Component {
	state = {
		filter: {
			category: "All",
			text: "",
		},
		categories: null,
		products: null,
	};

	componentDidMount() {
		const products = productServices.getProductByFilter(this.state.filter);
		const categories = productServices.getCategoryList();
		this.setState({ categories, products });
	}

	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let currFilter = this.state.filter;
		currFilter[name] = value;
		this.setState({ filter: currFilter });
		const products = productServices.getProductByFilter(currFilter);
		this.setState({ products });
	};

	render() {
		const { categories, filter, products } = this.state;
		return (
			<div>
				{categories && (
					<FilterForm
						categories={categories}
						filter={filter}
						onHandleChange={this.handleChange}
					/>
				)}
				{products && <ProductsList products={products} />}
			</div>
		);
	}
}
