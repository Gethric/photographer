import React from "react";
import "./sections.styles.scss";
import { Link } from "react-router-dom";

const Sections = ({ title, linkUrl }) => (
	<Link className="section" to={linkUrl}>
		{title}
	</Link>
);

export default Sections;
