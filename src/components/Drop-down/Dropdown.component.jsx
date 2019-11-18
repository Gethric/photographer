import React from "react";
import "./dropdown.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Sections from "../Sections/Sections.component";
import { selectCollectionsForPreview } from "../../redux/photoshop/photoshop.selectors";

const Dropdown = ({ id, collections }) => {
	return (
		<div className="dropdown" id={id}>
			{collections.map(({ id, ...otherCollectionsProps }) => (
				<Sections key={id} {...otherCollectionsProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(Dropdown);
