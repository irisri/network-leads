import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext.js";
import { CartList } from "../CartList/CartList";

export function ShoppingCart() {
	const { getCart, removeItemFromCart } = useContext(CartContext);

	const [cart, setCart] = useState(null);

	useEffect(() => {
		setCart(getCart());
	}, []);

	const removeItem = (event, item) => {
		event.preventDefault();
		const resCart = removeItemFromCart(item);
		setCart(resCart);
	};

	return (
		<div>
			{cart ? (
				<CartList cart={cart} onRemoveItem={removeItem} />
			) : (
				<p>There is nothing in the cart!</p>
			)}
		</div>
	);
}
