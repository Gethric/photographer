import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../Firebase/Firebase.utils";
import "./signinlink.styles.scss";

const SignInLink = ({ currentUser }) => (
	<div>
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

const mapStateToProps = ({ user: { currentUser } }) => ({
	currentUser
});

export default connect(mapStateToProps)(SignInLink);
