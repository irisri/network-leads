import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.js";
import "./CartDetails.css";

export function CartDetails(props) {
	const { product, amount } = props;
	const [state, setState] = useState(amount);
	const { updateAmountItem } = useContext(CartContext);

	const changeAmount = (event, action) => {
		event.preventDefault();
		let currState = state;
		if (action) {
			if (state === 10) return;
			currState++;
		} else {
			if (state === 0) return;
			currState--;
		}
		setState(currState);
		updateAmountItem(product, currState);
	};

	return (
		<div className="cart-details">
			<span>{product}:</span>
			<button onClick={(event) => changeAmount(event, false, product, state)}>
				-
			</button>
			<span>{state}</span>
			<button onClick={(event) => changeAmount(event, true, product, state)}>
				+
			</button>
		</div>
	);
}
