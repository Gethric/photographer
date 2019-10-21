import React from "react";
import "./header.styles.scss";
import Navbar from "../navbar/navbar.component";
import Social from "../social/Social.component";
import Cart from "../shop/Cart.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import { connect } from "react-redux";

const Header = ({ hidden }) => (
	<div className="header">
		<Social />
		<Navbar />
		<Cart />
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({ cart: { hidden } }) => ({
	hidden
});

export default connect(mapStateToProps)(Header);
