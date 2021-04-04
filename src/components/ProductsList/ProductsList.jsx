import React from "react";
import "./ProductsList.css";

import { ProductCard } from "../ProductCard/ProductCard";

export function ProductsList(props) {
	const { products } = props;

	return (
		<div>
			{products.map((product, i) => {
				return (
					<div className="category" key={i}>
						<h2>{Object.keys(product)[0]}</h2>
						<div className="flex wrap">
							{product[Object.keys(product)[0]].map((product, index) => {
								return <ProductCard productName={product} key={index} />;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
