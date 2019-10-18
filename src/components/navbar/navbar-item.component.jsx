import React from "react";
import "./navbar-item.styles.scss";

const NavbarItem = ({ title, Url }) => (
	<a className="NavbarItem" href={Url}>
		{title.toUpperCase()}
	</a>
);

export default NavbarItem;
