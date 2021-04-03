import { utils } from "./utilService";

export const cartServices = { loadCartToLocal, getCartObj };

function loadCartToLocal(cart) {
	utils.storeToStorage("cart", cart);
}

function getCartObj() {
	return utils.loadFromStorage("cart");
}
