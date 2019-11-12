import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import photoshopReducer from "./photoshop/photoshop.reducer";
import dropdownReducer from "./dropdown/dropdown.reducer";
import sectionsReducer from "./sections/sections.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"]
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	photoshop: photoshopReducer,
	dropdown: dropdownReducer,
	sections: sectionsReducer
});

export default persistReducer(persistConfig, rootReducer);
