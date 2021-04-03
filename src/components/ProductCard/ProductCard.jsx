import React, { useContext, useState } from "react";
import "./ProductCard.css";
import { CartContext } from "../../context/CartContext.js";

export function ProductCard(props) {
	const { productName } = props;
	const { addToCart } = useContext(CartContext);
	const [amount, setAmount] = useState(1);

	function addItemCart(event, itemName) {
		event.preventDefault();
		addToCart(itemName, amount);
	}

	const changeAmount = (event, action) => {
		event.preventDefault();
		if (action) {
			if (amount === 10) return;
			setAmount(amount + 1);
		} else {
			if (amount === 0) return;
			setAmount(amount - 1);
		}
	};

	return (
		<div className="card">
			<h3>{productName}</h3>
			<div className="flex space-between">
				<p>Amount:</p>
				<button onClick={(event) => changeAmount(event, false)}>-</button>
				{amount}
				<button onClick={(event) => changeAmount(event, true)}>+</button>
				<button
					onClick={(event) => addItemCart(event, productName)}
					className="icon">
					<i className="fas fa-cart-plus"></i>
				</button>
			</div>
		</div>
	);
}
