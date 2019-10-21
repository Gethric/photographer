import React from "react";
import SignIn from "../../components/SignIn_SignUp/SignIn.component";
import SignUp from "../../components/SignIn_SignUp/SignUp.component";

import "./SignInSignUp.styles.scss";

const SignInSignUp = () => (
	<div className="SignInSignUp">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInSignUp;
