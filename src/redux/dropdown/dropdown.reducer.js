import DropdownActionTypes from "./dropdown.types";

const INITIAL_STATE = {
	hidephotos: true,
	hidefilm: true
};

const dropdownReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case DropdownActionTypes.TOGGLE_PHOTO_DROPDOWN_HIDDEN:
			return {
				...state,
				hidephotos: !state.hidephotos
			};
		case DropdownActionTypes.EXTEND_PHOTO_DROPDOWN_HIDDEN:
			return {
				...state,
				hidephotos: false
			};
		case DropdownActionTypes.RETRACT_PHOTO_DROPDOWN_HIDDEN:
			return {
				...state,
				hidephotos: true
			};
		case DropdownActionTypes.TOGGLE_FILM_DROPDOWN_HIDDEN:
			return {
				...state,
				hidefilm: !state.hidefilm
			};
		default:
			return state;
	}
};

export default dropdownReducer;
