import React, { useState, createContext } from "react";
import { cartServices } from "../services/cartServices.js";
import { utils } from "../services/utilService.js";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const { children } = props;

	const [cartState, setCart] = useState({});

	//Add amount
	const addToCart = (item) => {
		console.log(cartState[item]);
		if (cartState[item] === undefined) {
			setCart({ [item]: 1 });
		} else {
			const addToItem = ++cartState[item];
			setCart({ [item]: addToItem });
		}
		cartServices.loadCartToLocal(cartState);
		console.log(cartServices.getCartObj());
	};

	const getCart = () => {
		const cart = cartServices.getCartObj();
		if (!cart) {
			return cartState;
		} else {
			return cart;
		}
	};

	const removeItemFromCart = (item) => {
		let cart = cartState;
		if (cart[item] === undefined) return cart;
		else {
			delete cart.item;
			setCart({ cart });
			console.log(cartState, cart);
			utils.storeToStorage(cart);
			return cart;
		}
	};

	return (
		<CartContext.Provider
			value={{ cartState, addToCart, getCart, removeItemFromCart }}>
			{children}
		</CartContext.Provider>
	);
};
