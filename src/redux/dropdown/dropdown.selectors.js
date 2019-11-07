import { createSelector } from "reselect";

const dropdownSelector = state => state.dropdown; // dropdownSelector = dropdown

export const hidePhotosSelector = createSelector(
	[dropdownSelector],
	dropdown => dropdown.hidephotos
);

export const hideFilmSelector = createSelector(
	[dropdownSelector],
	dropdown => dropdown.hidefilm
);
