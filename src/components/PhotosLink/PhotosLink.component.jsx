import React from "react";
import { connect } from "react-redux";
import {
	togglePhotoDropdownHidden,
	extendPhotoDropdownHidden,
	retractPhotoDropdownHidden
} from "../../redux/dropdown/dropdown.actions";
import "./photoslink.styles.scss";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Dropdown from "../Drop-down/Dropdown.component";
import { hidePhotosSelector } from "../../redux/dropdown/dropdown.selectors";

const PhotosLink = ({
	togglePhotoDropdownHidden,
	extendPhotoDropdownHidden,
	retractPhotoDropdownHidden,
	hidephotos
}) => {
	return (
		<div>
			<Link
				className="photoslink"
				to="/photoshop"
				//onMouseOver={extendPhotoDropdownHidden}
				//onMouseOut={retractPhotoDropdownHidden}
				onClick={togglePhotoDropdownHidden}
			>
				PHOTOGRAPHY
			</Link>
			{hidephotos ? null : <Dropdown id="photo" />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	hidephotos: hidePhotosSelector
});

const mapDispatchToProps = dispatch => ({
	togglePhotoDropdownHidden: () => dispatch(togglePhotoDropdownHidden()),
	extendPhotoDropdownHidden: () => dispatch(extendPhotoDropdownHidden()),
	retractPhotoDropdownHidden: () => dispatch(retractPhotoDropdownHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosLink);
