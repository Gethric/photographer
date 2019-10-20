import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} CustomButton`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
