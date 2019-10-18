import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
	<button className="CustomButton" {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
