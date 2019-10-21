import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../Firebase/Firebase.utils";
import "./navbar.styles.scss";

const Navbar = ({ currentUser }) => (
	<div className="Navbar">
		<Link className="NavbarItem" to="/">
			HOME
		</Link>
		<Link className="NavbarItem" to="/about">
			ABOUT
		</Link>
		<Link className="NavbarItem" to="/photography">
			PHOTOGRAPHY
		</Link>
		<Link className="NavbarItem" to="/film">
			FILM
		</Link>
		<Link className="NavbarItem" to="/contact">
			CONTACT
		</Link>
		{currentUser ? (
			<div className="NavbarItem" onClick={() => auth.signOut()}>
				SIGN OUT
			</div>
		) : (
			<Link className="NavbarItem" to="/signin">
				SIGN IN
			</Link>
		)}
	</div>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);
