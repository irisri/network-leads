import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext.js";
import { CartList } from "../CartList/CartList";

export function ShoppingCart() {
	const { getCart, removeItemFromCart } = useContext(CartContext);

	const [cart, setCart] = useState([]);

	useEffect(() => {
		if (getCart()) setCart(getCart());
	}, []);

	const removeItem = (event, item) => {
		event.preventDefault();
		const updatedCart = removeItemFromCart(item);
		setCart(updatedCart);
	};

	return (
		<div>
			{cart.length === 0 ? (
				<p>There is nothing in the cart!</p>
			) : (
				<CartList cart={cart} onRemoveItem={removeItem} />
			)}
		</div>
	);
}
