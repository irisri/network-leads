import React from "react";
import "./ProductsList.css";

import { ProductCard } from "../ProductCard/ProductCard";

export function ProductsList(props) {
	const { products } = props;

	return (
		<div>
			{Object.keys(products).map((key, i) => {
				// const items = products[key];
				return (
					<div className="category" key={i}>
						<h2>{key}</h2>
						<div className="flex wrap">
							{products[key].map((product, index) => {
								return <ProductCard productName={product} key={index} />;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
