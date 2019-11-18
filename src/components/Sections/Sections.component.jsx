import React from "react";
import "./sections.styles.scss";
import { Link } from "react-router-dom";

const Sections = ({ title, routeName }) => (
	<Link className="section" to={routeName} replace>
		{title}
	</Link>
);

export default Sections;
