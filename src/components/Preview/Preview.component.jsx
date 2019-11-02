import React from "react";
import ItemPreview from "./ItemPreview.component";

import "./preview.styles.scss";

const Preview = ({ title, items }) => (
	<div className="preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="item">
			{items
				.filter((item, idx) => idx < 4)
				.map(({ id, ...otherItemProps }) => (
					<ItemPreview key={id} {...otherItemProps} />
				))}
		</div>
	</div>
);

export default Preview;
