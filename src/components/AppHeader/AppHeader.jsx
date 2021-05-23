import React from "react";
import { Link } from "react-router-dom";
import "./AppHeader.css";

export function AppHeader() {
	return (
		<header>
			<nav className="flex space-between align-center">
				<div>
					<h1>
						<Link to="/network-leads">Shop</Link>
					</h1>
				</div>
				<div>
					<Link to="/cart">Cart</Link>
				</div>
			</nav>
		</header>
	);
}
