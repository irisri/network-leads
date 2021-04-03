import React from "react";
import { NavLink } from "react-router-dom";
import "./AppHeader.css";

export function AppHeader() {
	return (
		<header>
			<nav className="flex space-between align-center">
				<div>
					<h1>
						<NavLink to="/">Shop</NavLink>
					</h1>
				</div>
				<div>
					<NavLink to="/cart">Cart</NavLink>
				</div>
			</nav>
		</header>
	);
}
