import { createSelector } from "reselect";

const selectPhotos = state => state.photos.photoshop;

export const itemsSelector = createSelector(
	[selectPhotos],
	photoshop => photoshop.items
);
