import React from "react";
import { CartDetails } from "../CartDetails/CartDetails";
import "./CartList.css";

export function CartList(props) {
	const { cart, onRemoveItem } = props;

	return (
		<div>
			{cart.map((cartItem, i) => {
				const productName = Object.keys(cartItem)[0];
				const productAmount = cartItem[productName];
				return (
					<div className="flex wrap justify-center cart-item" key={i}>
						<CartDetails product={productName} amount={productAmount} />
						<button
							onClick={(event) => onRemoveItem(event, productName)}
							className="icon">
							<i className="fas fa-trash-alt"></i>
						</button>
					</div>
				);
			})}
		</div>
	);
}
