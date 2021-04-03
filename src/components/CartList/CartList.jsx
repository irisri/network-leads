import React from "react";
import { CartDetails } from "../CartDetails/CartDetails";
import "./CartList.css";

export function CartList(props) {
	const { cart, onRemoveItem } = props;

	return (
		<div>
			{Object.keys(cart).map((key) => (
				<div className="flex wrap justify-center cart-item" key={key}>
					<CartDetails product={key} amount={cart[key]} />
					<button
						onClick={(event) => onRemoveItem(event, key)}
						className="icon">
						<i className="fas fa-trash-alt"></i>
					</button>
				</div>
			))}
		</div>
	);
}
