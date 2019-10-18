import React from "react";
import "./header.styles.scss";
import Navbar from "../navbar/navbar.component";
import Shop from "../shop/Shop.component";
import Social from "../social/Social.component";
import SignInIcon from "../SignIn_SignUp/SignInIcon.component";

const Header = () => {
	return (
		<div className="header">
			<Social />
			<Navbar />
			<SignInIcon />
			<Shop />
		</div>
	);
};

export default Header;
