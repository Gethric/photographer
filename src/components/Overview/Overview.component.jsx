import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Preview from "../Preview/Preview.component";
import { selectCollectionsForPreview } from "../../redux/photoshop/photoshop.selectors";

import "./overview.styles.scss";

const Overview = ({ collections }) => (
	<div className="overview">
		{collections.map(({ id, ...otherCollectionsProps }) => (
			<Preview key={id} {...otherCollectionsProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(Overview);
