import React from "react";
import "./CartList.css";

export function CartList(props) {
	const { cart, onRemoveItem } = props;

	return (
		<div>
			{Object.keys(cart).map((key) => (
				<div className="flex wap cart-item" key={key}>
					<p>
						{key}: {cart[key]}
					</p>
					<button onClick={(event) => onRemoveItem(event, key)}>
						<i className="fas fa-trash-alt"></i>
					</button>
				</div>
			))}
		</div>
	);
}
