import React from "react";

import PhotosLink from "../PhotosLink/PhotosLink.component";
import HomeLink from "../HomeLink/HomeLink.component";
import AboutLink from "../AboutLink/AboutLink.component";
import ContactLink from "../ContactLink/ContactLink.component";
import SignInLink from "../SignInLink/SignInLink.component";

import "./navbar.styles.scss";

const Navbar = () => (
	<div className="Navbar">
		<HomeLink />
		<AboutLink />
		<PhotosLink />
		<ContactLink />
		<SignInLink />
	</div>
);

export default Navbar;
