import { createSelector } from "reselect";

const selectPhotos = state => {
	console.log(state);
	return state.photos.photos;
};

export const selectItems = createSelector(
	[selectPhotos],
	photos => photos.photos
);
