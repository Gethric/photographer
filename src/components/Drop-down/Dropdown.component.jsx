import React from "react";
import "./dropdown.styles.scss";

import { selectSectionsSections } from "../../redux/sections/sections.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Sections from "../Sections/Sections.component";

const Dropdown = ({ id, sections }) => (
	<div className="dropdown" id={id}>
		{sections.map(({ id, ...otherSectionsProps }) => (
			<Sections key={id} {...otherSectionsProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectSectionsSections
});

export default connect(mapStateToProps)(Dropdown);
