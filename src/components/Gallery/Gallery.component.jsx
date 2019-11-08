import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { itemsSelector } from "../../redux/photoshop/photoshop.selectors";

import "../../sass/components/card.styles.scss";
import GalleryItem from "./Gallery-item.component";

const Gallery = ({ photos }) => (
	<div className="wrapper">
		{photos.map(({ id, ...otherPhotosProps }) => (
			<GalleryItem key={id} {...otherPhotosProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	photos: itemsSelector
});

export default connect(
	null,
	mapStateToProps
)(Gallery);
