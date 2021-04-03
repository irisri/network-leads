import React from "react";
import "./Shop.css";
import { productServices } from "../../services/productServices";
import { FilterForm } from "../FilterForm/FilterForm";
import { ProductsList } from "../ProductsList/ProductsList";

export class Shop extends React.Component {
	state = {
		filter: "All",
		categories: null,
		products: null,
	};

	componentDidMount() {
		const products = productServices.getProductList(this.state.filter);
		const categories = productServices.getCategories();
		categories.unshift("All");
		this.setState({ categories, products });
	}

	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		this.setState({ [name]: value });
		const products = productServices.getProductList(value);
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
