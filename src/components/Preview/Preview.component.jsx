import React from "react";
import Item from "../Item/Item.component";

import "./preview.styles.scss";

const Preview = ({ title, items }) => (
	<div className="preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="item-preview">
			{items
				.filter((item, idx) => idx < 4)
				.map(item => (
					<Item key={item.id} item={item} />
				))}
		</div>
	</div>
);

export default Preview;
