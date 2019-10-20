import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.utils";
import "./SignInIcon.styles.scss";

const SignInIcon = ({ currentUser }) => {
	return (
		<div className="Sign_In_Icon">
			{currentUser ? (
				<div className="In_Out" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="In_Out" to="/signin">
					SIGN IN
				</Link>
			)}
		</div>
	);
};

export default SignInIcon;
