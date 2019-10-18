import React, { Component } from "react";
import NavbarItem from "./navbar-item.component";
import "./navbar.styles.scss";
import NAVBAR from "./NavBarData";

class Navbar extends Component {
	constructor() {
		super();

		this.state = {
			navbar: NAVBAR
		};
	}

	render() {
		const { navbar } = this.state;
		return (
			<div className="NavBar">
				{navbar.map(({ id, ...otherNavbarProps }) => (
					<NavbarItem key={id} {...otherNavbarProps} />
				))}
			</div>
		);
	}
}

export default Navbar;
