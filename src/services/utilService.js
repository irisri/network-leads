function storeToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value || null));
}
function loadFromStorage(key) {
	let data = localStorage.getItem(key);
	return data ? JSON.parse(data) : undefined;
}

export const utils = {
	storeToStorage,
	loadFromStorage,
};
