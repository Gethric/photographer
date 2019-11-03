import React from "react";
import { XMasonry, XBlock } from "react-xmasonry";

const GalleryItem = ({ id, items }) => (
	<XMasonry>
		{items.map(({ id, imageUrl, alt }) => (
			<XBlock key={id}>
				<div className="card">
					<img className="foto" src={imageUrl} alt={alt} />
				</div>
			</XBlock>
		))}
	</XMasonry>
);

export default GalleryItem;
