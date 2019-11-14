import { createSelector } from "reselect";

const selectVideos = state => {
	console.log(state);
	return state.video;
};

export const selectVideo = createSelector([selectVideos], video => video.video);
