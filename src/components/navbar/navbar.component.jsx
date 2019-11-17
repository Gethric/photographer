import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Dropdown from "../Drop-down/Dropdown.component";
import PhotosLink from "../PhotosLink/PhotosLink.component";
import HomeLink from "../HomeLink/HomeLink.component";
import AboutLink from "../AboutLink/AboutLink.component";
import ContactLink from "../ContactLink/ContactLink.component";
import SignInLink from "../SignInLink/SignInLink.component";

import "./navbar.styles.scss";
import { hidePhotosSelector } from "../../redux/dropdown/dropdown.selectors";

const Navbar = ({ hidephotos }) => (
	<div className="Navbar">
		<HomeLink />
		<AboutLink />
		<PhotosLink />

		<ContactLink />
		<SignInLink />
	</div>
);

const mapStateToProps = createStructuredSelector({
	hidephotos: hidePhotosSelector
});

export default connect(mapStateToProps)(Navbar);

//{hidephotos ? null : <Dropdown id="photo" />}
