import React, { Component } from "react";
import { XMasonry, XBlock } from "react-xmasonry";
import PHOTOS from "../../assets/photos.assets";
import "../../sass/components/card.styles.scss";

class Gallery extends Component {
	constructor() {
		super();

		this.state = {
			photos: PHOTOS
		};
	}

	render() {
		const { photos } = this.state;
		return (
			<XMasonry>
				{photos.map(({ id, imageUrl, alt }) => (
					<XBlock key={id}>
						<div className="card">
							<img className="foto" src={imageUrl} alt={alt} />
						</div>
					</XBlock>
				))}
			</XMasonry>
		);
	}
}

export default Gallery;
