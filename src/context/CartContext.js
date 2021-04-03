import React, { useState, createContext } from "react";
import { cartServices } from "../services/cartServices.js";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const { children } = props;

	const [cartState, setCart] = useState(null);

	const loadCart = () => {
		if (!cartState) {
			let storageCart = cartServices.getCartObj();
			if (storageCart) {
				setCart(storageCart);
				return storageCart;
			}
		}
		return cartState;
	};

	const getCart = () => {
		return loadCart();
	};

	const addToCart = (item, amount) => {
		let currCart = cartState;
		currCart === null
			? (currCart = { [item]: amount })
			: (currCart[item] = cartState[item] + amount);

		setCart(currCart);
		cartServices.loadCartToLocal(currCart);
	};

	const removeItemFromCart = (item) => {
		let cart = cartState;
		if (cart[item] === undefined) return cart;
		else {
			delete cart.item;
			setCart({ cart });
			console.log(cartState, cart);
			cartServices.loadCartToLocal(cart);
			return cart;
		}
	};

	const updateAmountItem = (item, amount) => {
		let currCart = cartState;
		currCart[item] = amount;
		cartServices.loadCartToLocal(currCart);
		setCart(currCart);
	};

	return (
		<CartContext.Provider
			value={{
				cartState,
				addToCart,
				getCart,
				removeItemFromCart,
				updateAmountItem,
			}}>
			{children}
		</CartContext.Provider>
	);
};
