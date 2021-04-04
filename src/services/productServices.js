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
	{ Fruits: ["Apples", "Oranges", "Bananas"] },
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
	let categories = [];
	for (let i = 0; i < gProducts.length; i++) {
		categories.push(Object.keys(gProducts[i])[0]);
	}
	categories.unshift("All");
	return categories;
}

export const productServices = { getProductList, getCategories };
