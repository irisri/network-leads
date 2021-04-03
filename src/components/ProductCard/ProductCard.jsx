import React, { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../../context/CartContext.js";

export function ProductCard(props) {
	const { productName } = props;
	const { addToCart } = useContext(CartContext);

	function addItemCart(event, itemName) {
		event.preventDefault();
		addToCart(itemName);
	}

	return (
		<div className="card flex">
			<h3>{productName}</h3>
			<button onClick={(event) => addItemCart(event, productName)}>
				<i className="fas fa-cart-plus"></i>
			</button>
		</div>
	);
}
