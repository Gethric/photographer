import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShopIcon } from "../../assets/shopping-cart.svg";
import "./cart.styles.scss";

const Cart = ({ toggleCartHidden }) => (
	<div className="cart" onClick={toggleCartHidden}>
		<ShopIcon className="icon" />
		<span className="item_count">0</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
	null,
	mapDispatchToProps
)(Cart);
