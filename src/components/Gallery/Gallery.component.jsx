import React, { Component } from "react";
import { XMasonry, XBlock } from "react-xmasonry";
import PHOTOS from "../../assets/photos.assets";

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
				{photos.map(({ id, imageUrl }) => (
					<XBlock key={id}>
						<div className="card">
							<img src={imageUrl} alt="girl" />
						</div>
					</XBlock>
				))}
			</XMasonry>
		);
	}
}

export default Gallery;
