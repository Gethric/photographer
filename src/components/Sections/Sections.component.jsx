import React from "react";
import "./sections.styles.scss";
import { Route, Link } from "react-router-dom";

const Sections = ({ title, linkUrl, match }) => (
	<Link className="section" to={linkUrl}>
		{title}
	</Link>
);

export default Sections;
