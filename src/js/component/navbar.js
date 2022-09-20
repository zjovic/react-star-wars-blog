import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/sw-logo.png'
import Favourites from "./favourites.js";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img src={logo} alt="Star Wars" className="logo"/>
				</Link>
				<Favourites />
			</div>
		</nav>
	);
};
