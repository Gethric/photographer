import React from "react";

const GalleryItem = ({ imageUrl, alt }) => {
	return <img src={imageUrl} alt={alt}></img>;
};

export default GalleryItem;
