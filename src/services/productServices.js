import { utils } from "./utilService";

const PRODUCTS = [
	{
		"Dairy products": [
			"Milk",
			"Yogurt",
			"Chocolate milk",
			"Cottage cheese",
			"Gouda cheese",
		],
	},
	{ Bakery: ["Bread", "Pita", "Danish"] },
	{ Vegetables: ["Tomatoes", "Cucumbers", "Peppers", "Carrots"] },
	{ fruits: ["Apples", "Oranges", "Bananas"] },
];

const gProducts = loadProducts();

function loadProducts() {
	let products = utils.loadFromStorage("products");
	if (products === undefined) {
		products = PRODUCTS;
		utils.storeToStorage("products", products);
	}
	return products;
}

function getProductList(filterBy) {
	if (filterBy === "All") {
		return gProducts;
	} else {
		return { [filterBy]: gProducts[filterBy] };
	}
}

function getCategories() {
	return Object.keys(gProducts);
}

export const productServices = { getProductList, getCategories };
