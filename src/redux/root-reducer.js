import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import photosReducer from "./photoshop/photoshop.reducer";
import dropdownReducer from "./dropdown/dropdown.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"]
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	dropdown: dropdownReducer,
	photos: photosReducer
});

export default persistReducer(persistConfig, rootReducer);
