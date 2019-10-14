import React from "react";
import "../../sass/layout/header.styles.scss";
import Navbar from "../navbar/navbar.component";
import Shop from "../shop/Shop.component";
import Social from "../social/Social.component";
import SignInItem from "../signin-signup/SignInItem.component";

const Header = () => {
	return (
		<div className="header">
			<Social />
			<Navbar />
			<SignInItem />
			<Shop />
		</div>
	);
};

export default Header;
