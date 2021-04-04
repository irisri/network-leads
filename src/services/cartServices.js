import { utils } from "./utilService";

export const cartServices = { loadCartToLocal, getCart };

function loadCartToLocal(cart) {
	utils.storeToStorage("cart", cart);
}

function getCart() {
	return utils.loadFromStorage("cart");
}
