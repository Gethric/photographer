import React from "react";
import "./cartdropdown.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";

const CartDropdown = () => (
	<div className="cart_dropdown">
		<div className="cart_items" />
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;
