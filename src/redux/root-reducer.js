import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import dropdownReducer from "./dropdown/dropdown.reducer";

export default combineReducers({
	user: userReducer,
	cart: cartReducer,
	dropdown: dropdownReducer
});
