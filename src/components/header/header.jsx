import React from "react";
import "./header.styles.scss";
import Navbar from "../navbar/navbar.component";
import Shop from "../shop/Shop.component";
import Social from "../social/Social.component";
import SignInIcon from "../SignIn_SignUp/SignInIcon.component";

const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Social />
			<Navbar />
			<SignInIcon currentUser={currentUser} />
			<Shop />
		</div>
	);
};

export default Header;
