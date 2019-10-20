import React from "react";
import { Link } from "react-router-dom";
import "./navbar-item.styles.scss";

const NavbarItem = ({ title, Url }) => (
	<Link className="NavbarItem" to={Url}>
		{" "}
		{title.toUpperCase()}
	</Link>
);

export default NavbarItem;
