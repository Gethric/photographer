import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Preview from "../../components/Preview/Preview.component";
import { itemsSelector } from "../../redux/photoshop/photoshop.selectors";

import "./Photoshop.styles.scss";

const Photoshop = ({ photos }) => (
	<div className="photoshop-page">
		{photos.map(({ id, ...otherPhotosProps }) => (
			<Preview key={id} {...otherPhotosProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	photos: itemsSelector
});

export default connect(
	null,
	mapStateToProps
)(Photoshop);
