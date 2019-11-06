import React from "react";
import "./cartdropdown.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => (
	<div className="cart_dropdown">
		<div className="cart_items">
			{cartItems.map(cartItem => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
