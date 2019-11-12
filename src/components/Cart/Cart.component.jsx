import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShopIcon } from "../../assets/shopping-cart.svg";
import "./cart.styles.scss";

const Cart = ({ toggleCartHidden, itemCount }) => (
	<div className="cart" onClick={toggleCartHidden}>
		<ShopIcon className="icon" />
		<span className="item_count">{itemCount}</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
