import React from "react";
import "./header.styles.scss";
import Navbar from "../navbar/navbar.component";
import Shop from "../shop/Shop.component";
import Social from "../social/Social.component";

const Header = () => (
	<div className="header">
		<Social />
		<Navbar />
		<Shop />
	</div>
);

export default Header;
