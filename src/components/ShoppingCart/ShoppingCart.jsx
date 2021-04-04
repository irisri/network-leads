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

	const printCart = (event) => {
		event.preventDefault();
		console.log(cart);
	};

	return (
		<div>
			{cart.length === 0 ? (
				<p>There is nothing in the cart!</p>
			) : (
				<div>
					<CartList cart={cart} onRemoveItem={removeItem} />
					<button onClick={(event) => printCart(event)}>Buy</button>
				</div>
			)}
		</div>
	);
}
