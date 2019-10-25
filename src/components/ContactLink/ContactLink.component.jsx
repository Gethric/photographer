import React from "react";
import { Link } from "react-router-dom";
import "./contactlink.styles.scss";

const ContactLink = () => (
	<Link className="NavbarItem" to="/contact">
		CONTACT
	</Link>
);

export default ContactLink;
