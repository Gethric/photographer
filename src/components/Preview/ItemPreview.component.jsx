import React from "react";
import "./itempreview.styles.scss";

const ItemPreview = ({ id, name, price, imageUrl }) => (
	<div className="item-preview">
		<div
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="preview-footer">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
	</div>
);

export default ItemPreview;
