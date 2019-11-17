import { createSelector } from "reselect";

const selectPhotoshop = state => state.photoshop;

export const selectPhotos = createSelector(
	[selectPhotoshop],
	photoshop => photoshop.photos
);

export const selectCollectionsForPreview = createSelector(
	[selectPhotos],
	photos => Object.keys(photos).map(key => photos[key])
);

export const selectPhoto = photoUrlParam =>
	createSelector([selectPhotos], photos => photos[photoUrlParam]);
