import React from "react";
import { connect } from "react-redux";
import { toggleDropdownHidden } from "../../redux/dropdown/dropdown.actions";
import "./filmlink.styles.scss";

const FilmLink = ({ toggleDropdownHidden }) => (
	<div className="filmlink" onClick={toggleDropdownHidden}>
		<div className="NavbarItem">FILM</div>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleDropdownHidden: () => dispatch(toggleDropdownHidden())
});

export default connect(
	null,
	mapDispatchToProps
)(FilmLink);
