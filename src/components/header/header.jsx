import React from "react";
import "./header.styles.scss";
import Navbar from "../navbar/navbar.component";
import Social from "../social/Social.component";
import Cart from "../shop/Cart.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import { connect } from "react-redux";
import { cartHiddenSelector } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ hidden }) => (
	<div className="header">
		<Social />
		<Navbar />
		<Cart />
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	hidden: cartHiddenSelector
});

export default connect(mapStateToProps)(Header);
