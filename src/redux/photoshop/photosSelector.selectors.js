import { createSelector } from "reselect";

const selectPhotos = state => state.photos;

export const selectItems = createSelector(
	[selectPhotos],
	photos => photos.photos
);
