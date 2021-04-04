import React, { useState, createContext } from "react";
import { cartServices } from "../services/cartServices.js";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const { children } = props;

	const [cartState, setCart] = useState();

	const loadCart = () => {
		if (!cartState) {
			let storageCart = cartServices.getCart();
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
		let currCart = [];
		if (cartState) currCart = [...cartState];
		if (currCart === undefined) currCart = [{ [item]: amount }];
		else {
			const itemIndex = currCart.findIndex(
				(product) => Object.keys(product)[0] === item
			);
			if (itemIndex === -1) {
				currCart.push({ [item]: amount });
			} else {
				currCart[itemIndex][item] += amount;
			}
		}
		setCart(currCart);
		cartServices.loadCartToLocal(currCart);
	};

	const removeItemFromCart = (item) => {
		let currCart = [...cartState];
		const itemIndex = currCart.findIndex(
			(product) => Object.keys(product)[0] === item
		);
		if (itemIndex === -1) return currCart;
		else {
			currCart.splice(itemIndex, 1);
			setCart(currCart);
			cartServices.loadCartToLocal(currCart);
		}
		return currCart;
	};

	const updateAmountItem = (item, amount) => {
		let currCart = [...cartState];
		const itemIndex = currCart.findIndex(
			(product) => Object.keys(product)[0] === item
		);
		if (itemIndex === -1) return currCart;
		currCart[itemIndex][item] = amount;
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
