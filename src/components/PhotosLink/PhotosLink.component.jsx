import React from "react";
import { connect } from "react-redux";
import { toggleDropdownHidden } from "../../redux/dropdown/dropdown.actions";
import "./photoslink.styles.scss";

const PhotosLink = ({ toggleDropdownHidden }) => (
	<div className="photoslink" onClick={toggleDropdownHidden}>
		<div className="NavbarItem">PHOTOGRAPHY</div>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleDropdownHidden: () => dispatch(toggleDropdownHidden())
});

export default connect(
	null,
	mapDispatchToProps
)(PhotosLink);
