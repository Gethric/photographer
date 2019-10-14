import React from "react";
import NavbarItem from "./navbar-item.component";
import "../../sass/components/navbar.styles.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<NavbarItem />
			<NavbarItem />
			<NavbarItem />
			<NavbarItem />
			<NavbarItem />
		</div>
	);
};

export default Navbar;
