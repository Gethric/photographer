import React from "react";
import "./cartdropdown.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem.component";

const CartDropdown = ({ cartItems }) => (
	<div className="cart_dropdown">
		<div className="cart_items" />
		{cartItems.map(cartItem => (
			<CartItem key={cartItem.id} item={cartItem} />
		))}
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
