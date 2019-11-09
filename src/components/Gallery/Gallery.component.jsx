import React from "react";

import "../../sass/components/card.styles.scss";
import GalleryItem from "./Gallery-item.component";

import PHOTOS_DATA from "../../redux/photoshop/PhotosData.assets";

class Gallery extends React.Component {
	constructor() {
		super();

		this.state = {
			photos: PHOTOS_DATA
		};
	}

	render() {
		const { photos } = this.state;
		return (
			<div className="wrapper">
				{photos.map(({ id, ...otherPhotosProps }) => (
					<GalleryItem key={id} {...otherPhotosProps} />
				))}
			</div>
		);
	}
}

export default Gallery;
