import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext.js";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Shop } from "./components/Shop/Shop";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import "./App.css";

function App() {
	return (
		<CartProvider>
			<div className="container">
				<Router>
					<AppHeader />
					<Switch>
						<Route exact path="/" component={Shop}></Route>
						<Route path="/cart" component={ShoppingCart}></Route>
					</Switch>
				</Router>
			</div>
		</CartProvider>
	);
}

export default App;
