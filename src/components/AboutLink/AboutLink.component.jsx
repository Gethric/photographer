import React from "react";
import { Link } from "react-router-dom";
import "./aboutlink.styles.scss";

const AboutLink = () => (
	<Link className="NavbarItem" to="/about">
		ABOUT
	</Link>
);

export default AboutLink;
