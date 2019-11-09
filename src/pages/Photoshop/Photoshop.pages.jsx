import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Preview from "../../components/Preview/Preview.component";
import { selectItems } from "../../redux/photoshop/photosSelector.selectors";

import "./Photoshop.styles.scss";

const Photoshop = ({ items }) => (
	<div className="photoshop-page">
		{items.map(({ id, ...otherPhotosProps }) => (
			<Preview key={id} {...otherPhotosProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	items: selectItems
});

export default connect(mapStateToProps)(Photoshop);
