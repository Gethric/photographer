import DropdownActionTypes from "./dropdown.types";

export const togglePhotoDropdownHidden = () => ({
	type: DropdownActionTypes.TOGGLE_PHOTO_DROPDOWN_HIDDEN
});

export const extendPhotoDropdownHidden = () => ({
	type: DropdownActionTypes.EXTEND_PHOTO_DROPDOWN_HIDDEN
});

export const retractPhotoDropdownHidden = () => ({
	type: DropdownActionTypes.RETRACT_PHOTO_DROPDOWN_HIDDEN
});

export const toggleFilmDropdownHidden = () => ({
	type: DropdownActionTypes.TOGGLE_FILM_DROPDOWN_HIDDEN
});
