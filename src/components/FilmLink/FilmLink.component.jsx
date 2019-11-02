import React from "react";
import { connect } from "react-redux";
import { toggleFilmDropdownHidden } from "../../redux/dropdown/dropdown.actions";
import "./filmlink.styles.scss";
import { Link } from "react-router-dom";

const FilmLink = ({ toggleFilmDropdownHidden }) => (
	<Link
		className="NavbarItem"
		to="/film"
		onMouseOver={toggleFilmDropdownHidden}
		onMouseLeave={toggleFilmDropdownHidden}
	>
		FILM
	</Link>
);

const mapDispatchToProps = dispatch => ({
	toggleFilmDropdownHidden: () => dispatch(toggleFilmDropdownHidden())
});

export default connect(
	null,
	mapDispatchToProps
)(FilmLink);
