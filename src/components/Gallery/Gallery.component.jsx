import React, { Component } from "react";
import "../../sass/components/card.styles.scss";
import GalleryItem from "./Gallery-item.component";
import PHOTOS2 from "../../assets/Photos2.assets";

class Gallery extends Component {
	constructor() {
		super();

		this.state = {
			photos: PHOTOS2
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
