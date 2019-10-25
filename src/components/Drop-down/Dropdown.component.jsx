import React from "react";
import "./dropdown.styles.scss";
import { Link } from "react-router-dom";

const Dropdown = () => (
	<div className="dropdown">
		<div className="items" />
		<Link className="NavbarItem" to="/fashion"></Link>
		<Link className="NavbarItem" to="/events"></Link>
		<Link className="NavbarItem" to="/places"></Link>
	</div>
);

export default Dropdown;
