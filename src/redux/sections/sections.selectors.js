import { createSelector } from "reselect";

const selectSections = state => {
	console.log(state);
	return state.sections;
};

export const selectSectionsSections = createSelector(
	[selectSections],
	sections => sections.sections
);
