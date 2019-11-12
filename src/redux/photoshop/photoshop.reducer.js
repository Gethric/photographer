import PHOTOS_DATA from "./photos";

const INITIAL_STATE = {
	photos: PHOTOS_DATA
};

const photosReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default photosReducer;
