import PHOTOS_DATA from "./PhotosData.assets";

const INITIAL_STATE = {
	photoshop: PHOTOS_DATA
};

const photosReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default photosReducer;
