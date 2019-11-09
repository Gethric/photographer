import React from "react";
import { connect } from "react-redux";
import { togglePhotoDropdownHidden } from "../../redux/dropdown/dropdown.actions";
import "./photoslink.styles.scss";
import { Link } from "react-router-dom";

const PhotosLink = ({ togglePhotoDropdownHidden }) => (
	<Link
		className="NavbarItem"
		to="/photoshop"
		onMouseOver={togglePhotoDropdownHidden}
		onMouseLeave={togglePhotoDropdownHidden}
	>
		PHOTOGRAPHY
	</Link>
);

const mapDispatchToProps = dispatch => ({
	togglePhotoDropdownHidden: () => dispatch(togglePhotoDropdownHidden())
});

export default connect(
	null,
	mapDispatchToProps
)(PhotosLink);
