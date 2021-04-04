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

function getProductsCategory(category) {
	if (category === "All") return gProducts;
	else
		return [gProducts.find((product) => Object.keys(product)[0] === category)];
}

function getProductByFilter(filterBy) {
	const { category, text } = filterBy;
	let productsToFilter = getProductsCategory(category);
	if (text.length === 0) return productsToFilter;
	else {
		let filteredProducts = [];
		for (var i = 0; i < productsToFilter.length; i++) {
			let filteredCategory = [];
			let categoryTitle = Object.keys(productsToFilter[i])[0];
			let categoryArray = productsToFilter[i][categoryTitle];
			for (let j = 0; j < categoryArray.length; j++) {
				if (categoryArray[j].toLowerCase().includes(text)) {
					filteredCategory.push(categoryArray[j]);
				}
			}
			if (filteredCategory.length > 0)
				filteredProducts.push({ [categoryTitle]: filteredCategory });
			filteredCategory = [];
		}
		return filteredProducts;
	}
}

function getCategoryList() {
	let categories = [];
	for (let i = 0; i < gProducts.length; i++) {
		categories.push(Object.keys(gProducts[i])[0]);
	}
	categories.unshift("All");
	return categories;
}

export const productServices = { getProductByFilter, getCategoryList };
