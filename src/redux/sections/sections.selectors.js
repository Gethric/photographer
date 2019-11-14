import { createSelector } from "reselect";

const selectSections = state => state.sections;

export const selectSectionsSections = createSelector(
	[selectSections],
	sections => sections.sections
);
