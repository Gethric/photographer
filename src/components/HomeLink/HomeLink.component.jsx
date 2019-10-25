import React from "react";
import { Link } from "react-router-dom";
import "./homelink.styles.scss";

const HomeLink = () => (
	<Link className="NavbarItem" to="/">
		HOME
	</Link>
);

export default HomeLink;
