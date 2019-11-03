import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
	<button
		className={`${inverted ? "inverted" : ""} 
			${isGoogleSignIn ? "google-sign-in" : ""} CustomButton`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
